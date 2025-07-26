import React, { Suspense } from "react";
import { Logo } from "../logo";
import { Container } from "../container";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SearchInput } from "./search-input";
import { LanguageChangerButton } from "./language-changer-button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background h-header sticky top-0 z-50 w-full border-b">
      <Container className="flex h-full items-center gap-4 py-4">
        <Logo />
        <SearchInput />
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
          16910
        </Link>
        <div className="ml-auto">
          <Link
            href="#"
            className={buttonVariants({
              className: "px-3! md:px-6!",
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
