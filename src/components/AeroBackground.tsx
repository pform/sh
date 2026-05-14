export const AeroBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-white overflow-hidden">
      {/* Very subtle gradient to give it a "human" depth without "vibe coding" */}
      <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(37,99,235,0.03)_0%,transparent_100%)]" />
    </div>
  );
};
