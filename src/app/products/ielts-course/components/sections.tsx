import { Section, SectionType } from "@/types/product";
import { CourseInstructor } from "./course-instructor";
import { Features } from "./features";
import { SectionSeparator } from "./section-separator";
import { Pointers } from "./pointers";
import { AboutTheCourse } from "./about-the-course";

interface SectionsProps {
  sections: Section[];
}

export const Sections = ({ sections }: SectionsProps) => {
  const getSection = (type: SectionType) => {
    return sections.find((section) => section.type === type) as Section;
  };

  return (
    <div>
      <CourseInstructor section={getSection("instructors")} />
      <Features section={getSection("features")} />
      <SectionSeparator />
      <Pointers section={getSection("pointers")} />
      <SectionSeparator/>
      <AboutTheCourse section={getSection("about")} />
    </div>
  );
};
