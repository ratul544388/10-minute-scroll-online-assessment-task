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
    <div
      style={{
        background:
          "url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)",
      }}
      className="relative w-full bg-center bg-no-repeat bg-cover!"
    >
      <Container className="flex max-w-[1200px] gap-10 py-4 md:py-10 lg:gap-20 lg:py-20">
        <HeroTexts
          title={title}
          description={description}
          className="hidden md:block"
        />
        <Trailer product={product} />
      </Container>
    </div>
  );
};
