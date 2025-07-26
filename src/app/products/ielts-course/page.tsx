import { fetchProductData } from "@/lib/fetch-product-data";
import { Metadata } from "next";
import { Hero } from "./components/hero";
import { CourseEnrollment } from "./components/course-enrollment";
import { CheckList } from "./components/hero/check-list";
import { Container } from "@/app/components/container";
import { Separator } from "@/components/ui/separator";
import { CourseInstructor } from "./components/course-instructor";
import { Sections } from "./components/sections";
import { SectionCategories } from "./components/section-categories";

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await fetchProductData();

  return {
    title: data.seo.title,
    description: data.seo.description,
  };
};

const Page = async () => {
  const { data: product } = await fetchProductData();

  return (
    <div>
      <Hero product={product} />
      <Container>
        <CourseEnrollment className="px-0 md:hidden" />
        <CheckList checkList={product.checklist} className="px-0 md:hidden" />
        <SectionCategories categories={product.sections.map((s) => s.name)} />
        <Sections sections={product.sections} />
      </Container>
    </div>
  );
};

export default Page;
