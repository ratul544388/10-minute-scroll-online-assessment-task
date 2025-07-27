"use client";

import { SectionTitle } from "@/components/section-title";
import { ExclusiveFeature, Section } from "@/types/product";
import { Check } from "lucide-react";
import Image from "next/image";

interface ExclusiveFeaturesProps {
  section: Section;
}

export const ExclusiveFeatures = ({ section }: ExclusiveFeaturesProps) => {
  const values = section.values as ExclusiveFeature[];
  return (
    <section className="">
      <SectionTitle>{section.name}</SectionTitle>
      <div className="rounded-lg border p-5">
        {values.map(({ id, checklist, file_url, title }) => (
          <div key={id} className="first:mb-6 first:border-b first:pb-6">
            <h5 className="font-medium">{title}</h5>
            <div className="flex w-full flex-col justify-between gap-6 lg:flex-row">
              <ul className="mt-4 space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <Check className="size-6 text-blue-500" />
                    <p className="text-muted-foreground">{item}</p>
                  </li>
                ))}
              </ul>
              <div className="relative size-48 min-w-48">
                <Image
                  src={file_url}
                  fill
                  alt="image"
                  className="bg-accent rounded-lg object-cover"
                  sizes="192px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
