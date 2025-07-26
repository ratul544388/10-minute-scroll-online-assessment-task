"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

export const SearchInput = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(containerRef as React.RefObject<HTMLDivElement>, () =>
    setOpen(false),
  );
  return (
    <div ref={containerRef} className="relative sm:flex-1 max-w-[450px] ml-auto sm:ml-0">
      <Image
        className="absolute cursor-pointer sm:cursor-default top-1/2 left-3 -translate-y-1/2"
        src="/search-icon.svg"
        alt="Icon"
        width={27}
        height={24}
        role="button"
      />
      <input
        className={cn(
          "peer hidden h-10 w-full rounded-3xl border pr-4 pl-12 outline-none sm:block",
          open && "rounded-b-none shadow-lg",
        )}
        placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
        onFocus={() => setOpen(true)}
      />
      <div
        className={cn(
          "bg-background ring-input pointer-events-none absolute h-32 w-full rounded-t-[2px] rounded-b-xl border-t-0 opacity-0 shadow-md ring transition-opacity ease-in",
          open && "pointer-events-auto opacity-100",
        )}
      ></div>
      <span
        className={cn(
          "pointer-events-none fixed inset-0 top-[72px] -z-10 bg-black/20 opacity-0 transition-opacity ease-in",
          open && "opacity-100",
        )}
      />
    </div>
  );
};
