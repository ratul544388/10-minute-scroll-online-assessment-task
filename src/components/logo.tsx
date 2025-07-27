import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type LogoProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Logo = ({
  href = "/products/ielts-course",
  className,
}: LogoProps) => {
  return (
    <Link
      href={href}
      className={cn("relative block aspect-[300/83] w-[100px]", className)}
    >
      <Image fill src="/logo.png" alt="Logo" sizes="100px" />
    </Link>
  );
};
