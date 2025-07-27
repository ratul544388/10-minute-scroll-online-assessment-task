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
    <div className={cn("md:min-w-[300px] hidden md:block lg:min-w-[400px] bg-background")}>
      <div className={cn("sticky top-[100px] border rounded-lg pb-5", !isHidden && "hidden")}>
        <CourseEnrollment ctaText={product.cta_text} />
        <CheckList checkList={product.checklist} className="px-3" />
      </div>
      {isHidden}
    </div>
  );
};
