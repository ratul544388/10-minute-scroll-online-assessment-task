import React from "react";
import { Logo } from "../logo";
import { Container } from "../container";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background z-50 w-full sticky top-0 border-b">
      <Container className="py-4 flex items-center">
        <Logo />
        <div className="ml-auto">
          <Link
            href="#"
            className={buttonVariants({
              className: "px-3! md:px-6",
              size: "sm",
            })}
          >
            Login
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
