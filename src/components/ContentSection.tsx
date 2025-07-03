import React from "react";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

const ContentSection = ({
  id = "section",
  title = "Section Title",
  subtitle,
  className,
  children,
  fullWidth = false,
}: ContentSectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-16 bg-[#0a192f] text-foreground min-h-[400px]",
        fullWidth ? "w-full" : "max-w-5xl mx-auto",
        className,
      )}
    >
      <div className="space-y-2 mb-8">
        {title && (
          <h2 className="text-2xl font-semibold tracking-tight text-[#ccd6f6]">
            {title}
          </h2>
        )}
        {subtitle && <p className="text-[#8892b0]">{subtitle}</p>}
      </div>
      <div className="content-container">{children}</div>
    </section>
  );
};

export default ContentSection;
