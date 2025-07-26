"use client";

import { About, Section } from "@/types/product";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HtmlText } from "@/components/html-text";
import { SectionTitle } from "@/components/section-title";

interface AboutTheCourseProps {
  section: Section;
}

export const AboutTheCourse = ({ section }: AboutTheCourseProps) => {
  const values = section.values as About[];

  return (
    <section className="my-6">
      <article>
        <SectionTitle>{section.name}</SectionTitle>
        <Accordion type="single" collapsible className="w-full md:py-3 space-y-2 md:border md:rounded-md">
          {values.map(({ id, title, description }) => (
            <AccordionItem
              key={id}
              value={id.toString()}
              className="border-b border-dashed py-3"
            >
              <AccordionTrigger className="mt-0 md:px-5 py-0 font-medium text-base hover:no-underline">
                <HtmlText html={title} />
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground prose px-4 pt-2 pb-4">
                <HtmlText html={description} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </article>
    </section>
  );
};
