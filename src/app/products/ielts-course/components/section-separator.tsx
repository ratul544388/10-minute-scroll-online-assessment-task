import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SectionSeparatorProps {
  className?: string;
}

export const SectionSeparator = ({ className }: SectionSeparatorProps) => {
  return <Separator className={cn("my-7 min-h-2 md:min-h-auto md:bg-transparent", className)} />;
};
