import { cn } from "@/lib/utils";
import React from "react";

type SectionTitleProps = React.HtmlHTMLAttributes<HTMLHeadingElement>;

export const SectionTitle = ({ className, children }: SectionTitleProps) => {
  return <h3 className={cn("text-xl font-semibold mb-4", className)}>{children}</h3>;
};
