"use client";

import { ProductData } from "@/types/product";
import { CourseEnrollment } from "./course-enrollment";
import { CheckList } from "./hero/check-list";
import { cn } from "@/lib/utils";
import { useHiddenTrailerStore } from "../use-hidden-trailer-store";

interface StickyCheckListProps {
  product: ProductData;
}

export const StickyCheckList = ({ product }: StickyCheckListProps) => {
  const { isHidden } = useHiddenTrailerStore();
  return (
    <div
      className={cn(
        "bg-background hidden md:block md:min-w-[300px] lg:min-w-[400px]",
      )}
    >
      <div
        className={cn(
          "sticky top-[100px] rounded-lg border pb-5",
          !isHidden && "hidden",
        )}
      >
        <CourseEnrollment ctaText={product.cta_text} />
        <CheckList checkList={product.checklist} className="px-3" />
      </div>
      {isHidden}
    </div>
  );
};
