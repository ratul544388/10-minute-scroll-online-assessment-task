"use client";

import Link from "next/link";

interface SectionCategoriesProps {
  categories: string[];
}

export const SectionCategories = ({ categories }: SectionCategoriesProps) => {
  const uniqueCategories = [...new Set(categories)];
  return (
    <nav className="text-muted-foreground py-3 hidden md:block border-b">
      <ul className="scrollbar-none flex gap-4.5 overflow-x-auto">
        {uniqueCategories.map((c) => (
          <li key={c} className="text-nowrap">
            <Link href={`#${c}`}>{c}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
