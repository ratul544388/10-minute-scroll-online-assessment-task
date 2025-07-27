import { cn } from "@/lib/utils";
import { Checklist } from "@/types/product";
import Image from "next/image";

interface CheckListProps {
  checkList: Checklist[];
  className?: string;
}

export const CheckList = ({ checkList, className }: CheckListProps) => {
  return (
    <div className={cn("", className)}>
      <h2 className="font-semibold">এই কোর্সে যা থাকছে</h2>
      <ul className="mt-3 space-y-1.5">
        {checkList.map(({ id, text, icon }) => (
          <li key={id} className="flex gap-3">
            <Image
              src={icon}
              height={20}
              width={20}
              sizes="20px"
              alt="Icon"
              className="mt-0.5 h-fit w-auto"
            />
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
