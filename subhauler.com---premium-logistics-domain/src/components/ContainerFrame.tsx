import { ReactNode } from "react";

interface ContainerFrameProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const ContainerFrame = ({ children, className = "", title }: ContainerFrameProps) => {
  return (
    <div className={`bg-white border border-slate-200 rounded-xl p-8 shadow-sm ${className}`}>
      {title && (
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
