import { useCrossTop } from "@/hooks/use-cross-top";
import { ProductData } from "@/types/product";
import { useEffect } from "react";
import { useHiddenTrailerStore } from "../../use-hidden-trailer-store";
import { CourseEnrollment } from "../course-enrollment";
import { CheckList } from "./check-list";
import { HeroTexts } from "./hero-texts";
import { TrailerCarousel } from "./trailer-carousel";

interface TrailerProps {
  product: ProductData;
}

export const Trailer = ({ product }: TrailerProps) => {
  const { bottomRef, hasCrossedTop } = useCrossTop();
  const { setIsHidden } = useHiddenTrailerStore();

  useEffect(() => {
    setIsHidden(hasCrossedTop);
  }, [hasCrossedTop, setIsHidden]);

  return (
    <div
      className="relative ml-auto w-full max-w-full md:min-w-[300px] md:translate-y-6 lg:max-w-[400px] lg:min-w-[400px]"
    >
      <div className="md:bg-background w-full rounded-lg md:absolute md:border md:p-1 md:pb-4">
        <TrailerCarousel media={product.media} />
        <CourseEnrollment
          ctaText={product.cta_text}
          className="hidden md:block"
        />
        <CheckList
          checkList={product.checklist}
          className="hidden px-3 md:block"
        />
        <HeroTexts
          title={product.title}
          description={product.description}
          className="mt-5 md:hidden"
        />
        <span ref={bottomRef}/>
      </div>
    </div>
  );
};
