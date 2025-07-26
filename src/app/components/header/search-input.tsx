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
    <div ref={containerRef} className="relative flex-1">
      <Image
        className="absolute top-1/2 left-3 -translate-y-1/2"
        src="/search-icon.svg"
        alt="Icon"
        width={27}
        height={24}
      />
      <input
        className={cn("peer h-10 w-full rounded-4xl border pr-4 pl-12 outline-none", open && "rounded-b-none shadow-lg")}
        placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
        onFocus={() => setOpen(true)}
      />
      <div
        className={cn(
          "bg-background pointer-events-none absolute h-32 w-full rounded-t-[2px] rounded-b-xl border-t-0 opacity-0 shadow-md transition-opacity ease-in ring ring-input",
          open && "opacity-100 pointer-events-auto",
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
