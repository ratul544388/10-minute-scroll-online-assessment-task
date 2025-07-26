import { Container } from "@/components/container";
import { fetchProductData } from "@/lib/fetch-product-data";
import { SearchParams } from "@/types";
import { Language } from "@/types";
import { Metadata } from "next";
import { CourseEnrollment } from "./components/course-enrollment";
import { Hero } from "./components/hero";
import { CheckList } from "./components/hero/check-list";
import { SectionCategories } from "./components/section-categories";
import { Sections } from "./components/sections";
import { StickyCheckList } from "./components/sticky-check-list";

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await fetchProductData();

  return {
    title: data.seo.title,
    description: data.seo.description,
  };
};

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { lang } = await searchParams;
  const { data: product } = await fetchProductData(lang as Language);

  return (
    <div className="pb-[200px]">
      <Hero product={product} />
      <Container className="max-w-[1200px]">
        <div className="flex gap-10">
          <div className="overflow-hidden">
            <CourseEnrollment
              className="px-0 md:hidden"
              ctaText={product.cta_text}
            />
            <CheckList
              checkList={product.checklist}
              className="px-0 md:hidden"
            />
            <SectionCategories
              categories={product.sections.map((s) => s.name)}
            />
            <Sections sections={product.sections} />
          </div>
          <StickyCheckList product={product}/>
        </div>
      </Container>
    </div>
  );
};

export default Page;
