import { Section } from "@/types/product";
import { CourseInstructor } from "./course-instructor";
import { Separator } from "@/components/ui/separator";

interface SectionsProps {
  sections: Section[]
}

export const Sections = ({
    sections
} : SectionsProps) => {
    const section = sections.find((s) => s.type === "instructors") as Section;
  return (
     <div>
        <Separator className="min-h-2.5 my-4.5"/>
        <CourseInstructor section={section}/>
     </div>
    );
}
