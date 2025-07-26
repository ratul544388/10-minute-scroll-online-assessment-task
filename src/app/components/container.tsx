import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export const Container = ({
    className,
    children,
} : ContainerProps) => {
  return (
     <div className={cn("w-full max-w-[1520px] mx-auto px-4 md:px-6", className)}>
        {children}
     </div>
    );
}
