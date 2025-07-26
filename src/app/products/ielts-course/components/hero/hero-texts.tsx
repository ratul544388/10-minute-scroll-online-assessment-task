"use client";

import { cn } from "@/lib/utils";
import { ProductData } from "@/types/product";
import { FaStar } from "react-icons/fa";

type HeroTextsProps = Pick<ProductData, "title" | "description"> & {
  className?: string;
};

export const HeroTexts = ({
  title,
  description,
  className,
}: HeroTextsProps) => {
  return (
    <div className={cn('space-y-2.5 text-white', className)}>
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <div className="flex flex-wrap gap-y-3 gap-x-2">
        <ul className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>
              <FaStar className="text-yellow-500 size-4 md:size-5" />
            </li>
          ))}
        </ul>
        <p className="text-sm md:text-base">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</p>
      </div>
      <div
        className="text-gray-400 tracking-wide"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};
