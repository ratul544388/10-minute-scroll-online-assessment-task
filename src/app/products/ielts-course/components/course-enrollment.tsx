"use client";

import { Button } from "@/components/ui/button";
import { useCrossTop } from "@/hooks/use-cross-top";
import { cn } from "@/lib/utils";
import { CtaText } from "@/types/product";
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";

interface CourseEnrollmentProps {
  ctaText: CtaText;
  className?: string;
}

export const CourseEnrollment = ({
  ctaText,
  className,
}: CourseEnrollmentProps) => {
  const { hasCrossedTop, bottomRef } = useCrossTop();
  const { width } = useWindowSize();

  const md = width >= 768;

  return (
    <>
      <motion.div
        animate={hasCrossedTop && !md ? { y: ["100%", 0] } : {}}
        transition={{ duration: 0.3 }}
        className={cn(
          "space-y-4 px-3 py-6",
          hasCrossedTop &&
            !md &&
            "bg-background fixed inset-x-0 bottom-0 z-50 flex flex-col space-y-3 px-6! py-4 [box-shadow:0px_5px_20px_rgba(0,0,0,0.1)]",
          className,
        )}
      >
        <div className="flex items-center gap-2">
          <div className="text-2xl font-semibold">৳1000</div>
          <del className="text-muted-foreground">৳2000</del>
          <div
            className="relative rounded-sm bg-red-400 py-1 pr-3 pl-6 text-sm font-semibold text-white"
            style={{
              clipPath:
                "polygon(100% 0, 100% 50%, 100% 99%, 16% 99%, 0 50%, 16% 0)",
            }}
          >
            1000 ৳ ছাড়
            <span className="absolute top-1/2 left-3.5 size-1 rounded-full bg-white" />
          </div>
        </div>
        <Button className="hover:border-primary h-10 w-full border-b-4 border-green-700">
          {ctaText.name}
        </Button>
      </motion.div>
      <span ref={bottomRef} />
    </>
  );
};
