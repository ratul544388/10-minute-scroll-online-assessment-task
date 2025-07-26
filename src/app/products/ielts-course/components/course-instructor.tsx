import { HtmlText } from "@/app/components/html-text";
import { Instructor, Section } from "@/types/product";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CourseInstructorProps {
  section: Section;
}

export const CourseInstructor = ({ section }: CourseInstructorProps) => {
  const { name, values } = section;

  const {
    name: authorName,
    image,
    description,
    slug,
  } = values[0] as Instructor;

  return (
    <article>
      <h2 className="font-semibold text-xl">{name}</h2>
      <div className="flex gap-4 mt-5">
        <div className="relative size-18">
          <Image src={image} alt={authorName} fill className="object-cover rounded-full" />
        </div>
        <div>
          <Link href={`#skills/instructors/${slug}`} className="group flex items-center gap-1">
            <h3 className="text-lg">{authorName}</h3>
            <ChevronRight className="size-4 text-muted-foreground group-hover:translate-x-1 transition ease-in"/>
          </Link>
          <HtmlText html={description} className="text-sm text-muted-foreground" />
        </div>
      </div>
    </article>
  );
};
