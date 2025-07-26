import { SectionTitle } from "@/components/section-title";
import { Feature, Section } from "@/types/product";
import Image from "next/image";

interface FeaturesProps {
  section: Section;
}

export const Features = ({ section }: FeaturesProps) => {
  const { name } = section;
  const values = section.values as Feature[];
  return (
    <section className="mt-6">
      <SectionTitle>{name}</SectionTitle>
      <ul className="rounded-md grid sm:grid-cols-2 gap-5 bg-gray-900 p-6">
        {values.map(({ id, icon, title, subtitle }) => (
          <li key={id} className="flex gap-2.5">
            <div className="relative size-9 min-w-9">
              <Image src={icon} alt="Icon" fill className="" />
            </div>
            <div>
              <p className="text font-medium text-white">{title}</p>
              <span className="text-gray-400 text-sm">{subtitle}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
