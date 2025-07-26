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
    <section className="mt-7">
      <article>
        <h2 className="text-xl font-semibold">{name}</h2>
        <div className="mt-5 flex gap-4 rounded-md sm:border sm:p-4">
          <div className="relative size-18">
            <Image
              src={image}
              alt={authorName}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <Link
              href={`#skills/instructors/${slug}`}
              className="group flex items-center gap-1"
            >
              <h3 className="text-lg">{authorName}</h3>
              <ChevronRight className="text-muted-foreground size-4 transition ease-in group-hover:translate-x-1" />
            </Link>
            <HtmlText
              html={description}
              className="text-muted-foreground text-sm"
            />
          </div>
        </div>
      </article>
    </section>
  );
};
