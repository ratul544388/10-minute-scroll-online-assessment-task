import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const CourseEnrollment = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-4 px-3 py-6", className)}>
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
        Enroll
      </Button>
    </div>
  );
};
