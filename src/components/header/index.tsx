import React, { Suspense } from "react";
import { Logo } from "../logo";
import { Container } from "../container";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SearchInput } from "./search-input";
import { LanguageChangerButton } from "./language-changer-button";
import { Phone } from "lucide-react";
import { NavLinks } from "./nav-links";

const Header = () => {
  return (
    <header className="bg-background overflow-x-clip h-header sticky top-0 z-50 w-full border-b">
      <Container className="flex h-full items-center gap-4 py-4 md:px-8">
        <Logo />
        <SearchInput  />
        <NavLinks className="hidden lg:block"/>
        <Suspense fallback="">
          <LanguageChangerButton />
        </Suspense>
        <Link
          href="#tel:16910"
          className={buttonVariants({
            variant: "ghost",
            size: "sm",
            className: "text-primary hover:text-primary gap-1!",
          })}
        >
          <Phone className="size-4" />
          <span className="hidden sm:block">16910</span>
        </Link>
        <div className="">
          <Link
            href="#"
            className={buttonVariants({
              size: "sm",
              className: "px-3! md:h-9 md:px-6!",
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
