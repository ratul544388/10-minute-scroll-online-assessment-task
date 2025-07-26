"use client";


interface HtmlTextProps {
  html: string;
  className?: string;
}

export const HtmlText = ({ html, className }: HtmlTextProps) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className={className} />
  );
};
