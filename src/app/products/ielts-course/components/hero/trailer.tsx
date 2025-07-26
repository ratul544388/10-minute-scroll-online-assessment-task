import { ProductData } from "@/types/product";
import { CheckList } from "./check-list";
import { TrailerCarousel } from "./trailer-carousel";
import { CourseEnrollment } from "../course-enrollment";
import { HeroTexts } from "./hero-texts";

interface TrailerProps {
  product: ProductData;
}

export const Trailer = ({ product }: TrailerProps) => {
  return (
    <div className="relative -translate-y-6 ml-auto w-full max-w-full md:min-w-[300px] lg:max-w-[400px] lg:min-w-[400px]">
      <div className="md:bg-background w-full rounded-lg md:absolute md:border md:p-1 md:pb-4">
        <TrailerCarousel media={product.media} />
        <CourseEnrollment className="hidden md:block" />
        <CheckList
          checkList={product.checklist}
          className="hidden px-3 md:block"
        />
        <HeroTexts
          title={product.title}
          description={product.description}
          className="mt-5 md:hidden"
        />
      </div>
    </div>
  );
};
