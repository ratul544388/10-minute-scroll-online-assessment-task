"use client";


interface SectionCategoriesProps {
  categories: string[];
}

export const SectionCategories = ({ categories }: SectionCategoriesProps) => {
  const uniqueCategories = [...new Set(categories)];
  return (
    <nav className="mt-3 hidden md:block">
      <ul className="scrollbar-none text-muted-foreground flex gap-6 overflow-x-auto">
        {uniqueCategories.map((c) => (
          <li key={c} className="text-nowrap">
            {c}
          </li>
        ))}
      </ul>
    </nav>
  );
};
