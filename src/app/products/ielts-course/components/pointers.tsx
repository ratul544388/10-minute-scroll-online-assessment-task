"use client";

import { SectionTitle } from "@/components/section-title";
import { Pointer, Section } from "@/types/product";
import { Check } from "lucide-react";

interface PointersProps {
  section: Section;
}

export const Pointers = ({ section }: PointersProps) => {
  const values = section.values as Pointer[];
  return (
    <section className="rounded-md md:border md:p-6">
      <SectionTitle>{section.name}</SectionTitle>
      <ul className="grid gap-3 sm:grid-cols-2">
        {values.map(({ id, text }) => (
          <li key={id} className="flex gap-4">
            <Check className="size-4 min-w-4 text-blue-500" />
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
};
