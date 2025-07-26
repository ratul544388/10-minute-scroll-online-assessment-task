import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] px-4 md:px-6", className)}
    >
      {children}
    </div>
  );
};
