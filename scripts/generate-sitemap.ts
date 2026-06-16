import fs from "fs";
import path from "path";

const BASE_URL = "https://www.subhauler.com";

function run() {
  console.log("Starting Web-Audit: Dynamic Sitemap Generator...");

  const appFile = path.resolve(process.cwd(), "src/App.tsx");
  const servicesFile = path.resolve(process.cwd(), "src/pages/Services.tsx");
  const outputDir = path.resolve(process.cwd(), "public");
  const sitemapFile = path.join(outputDir, "sitemap.xml");

  if (!fs.existsSync(appFile)) {
    console.error(`ERROR: App.tsx not found at ${appFile}`);
    process.exit(1);
  }

  const appContent = fs.readFileSync(appFile, "utf-8");

  // Regex to extract path="..." from <Route />
  const routeRegex = /path=["']([^"']+)["']/g;
  const pathsSet = new Set<string>();
  let match;
  
  while ((match = routeRegex.exec(appContent)) !== null) {
    const routePath = match[1];
    if (routePath && routePath !== "*") {
      pathsSet.add(routePath);
    }
  }

  const rawPaths = Array.from(pathsSet);
  console.log(`Found raw routes from App.tsx: ${rawPaths.join(", ")}`);

  // Dynamically extract service slugs from Services.tsx
  const serviceSlugs: string[] = [];
  if (fs.existsSync(servicesFile)) {
    const servicesContent = fs.readFileSync(servicesFile, "utf-8");
    // Find lines like: slug: "subhauler-services",
    const slugRegex = /slug:\s*["']([^"']+)["']/g;
    let slugMatch;
    while ((slugMatch = slugRegex.exec(servicesContent)) !== null) {
      const slugVal = slugMatch[1];
      if (slugVal && !serviceSlugs.includes(slugVal)) {
        serviceSlugs.push(slugVal);
      }
    }
    console.log(`Extracted dynamic service slugs: ${serviceSlugs.join(", ")}`);
  } else {
    console.warn(`WARN: Services.tsx not found at ${servicesFile}. Dynamic services will not be expanded.`);
  }

  // Expand all paths (translating :slug dynamically)
  const expandedPaths: string[] = [];
  for (const p of rawPaths) {
    if (p.includes("/:slug")) {
      for (const slug of serviceSlugs) {
        expandedPaths.push(p.replace("/:slug", `/${slug}`));
      }
    } else {
      expandedPaths.push(p);
    }
  }

  // Generate XML structure
  const currentDate = new Date().toISOString().split("T")[0];
  const urlBlocks = expandedPaths.map((p) => {
    // Standardize URL formatting
    const routeUrl = `${BASE_URL}${p === "/" ? "" : p}`;
    
    // Set appropriate weights and update frequencies for SEO
    let changeFreq = "weekly";
    let priority = "0.6";

    if (p === "/") {
      changeFreq = "daily";
      priority = "1.0";
    } else if (p.startsWith("/services/")) {
      changeFreq = "weekly";
      priority = "0.8"; // individual dynamic services are important
    } else if (p === "/services" || p === "/solutions" || p === "/about") {
      changeFreq = "weekly";
      priority = "0.9"; // primary categorical navigation pages
    }

    return `  <url>
    <loc>${routeUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlBlocks.join("\n")}
</urlset>
`;

  // Create public directory if it does not exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write sitemap
  fs.writeFileSync(sitemapFile, sitemapXml, "utf-8");
  console.log(`Sitemap successfully written to ${sitemapFile} (${expandedPaths.length} locations included).`);
}

run();
