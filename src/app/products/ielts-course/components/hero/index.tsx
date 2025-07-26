"use client";

import { Container } from "@/app/components/container";
import { ProductData } from "@/types/product";
import { HeroTexts } from "./hero-texts";
import { Trailer } from "./trailer";

interface HeroProps {
  product: ProductData;
}

export const Hero = ({ product }: HeroProps) => {
  const { title, description } = product;
  return (
    <div className="relative w-full bg-gradient-to-t from-blue-950/70 to-black">
      <span className="absolute inset-0 bg-black -z-10" />
      <Container className="flex max-w-[1200px] gap-10 lg:gap-20 py-4 md:py-10 lg:py-20">
        <HeroTexts
          title={title}
          description={description}
          className="hidden md:block"
        />
        <Trailer product={product}/>
      </Container>
    </div>
  );
};
