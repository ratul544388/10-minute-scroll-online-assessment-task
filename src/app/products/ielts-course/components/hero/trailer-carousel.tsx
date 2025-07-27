"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Media } from "@/types/product";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

interface TrailerCarouselProps {
  media: Media[];
}

export const TrailerCarousel = ({ media }: TrailerCarouselProps) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [selectedScrollSnap, setSelectedScrollSnap] = useState(0);

  const filteredMedia = media.filter((_, i) => ![2, 3, 4].includes(i));

  useEffect(() => {
    const onScroll = () => {
      const newSelectedScrollSnap = api?.selectedScrollSnap() || 0;
      setSelectedScrollSnap(newSelectedScrollSnap);
      setPlayingIndex(null);
    };
    api?.on("select", onScroll);
  }, [api]);

  const handlePreviewClick = (scrollTo: number) => {
    api?.scrollTo(scrollTo);
    setSelectedScrollSnap(scrollTo);
  };

  return (
    <div className="w-full">
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {filteredMedia.map(
            ({ resource_type, resource_value, thumbnail_url }, i) => (
              <CarouselItem key={i}>
                <div className="relative aspect-video w-full">
                  {resource_type === "image" && (
                    <Image
                      src={resource_value}
                      alt={`Image ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 768px) 300px, 100vw"
                      className="bg-accent rounded-sm object-cover"
                    />
                  )}
                  {resource_type === "video" && (
                    <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-sm">
                      {playingIndex === i ? (
                        <iframe
                          className="h-full w-full border-0 bg-black"
                          src={`https://www.youtube.com/embed/${resource_value}?autoplay=1`}
                          title={`YouTube video player ${i + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <>
                          <Image
                            src={thumbnail_url || "/placeholder.jpg"}
                            alt={`Video Thumbnail ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 400px, (min-width: 768px) 300px, 100vw"
                          />
                          <button
                            onClick={() => setPlayingIndex(i)}
                            className="group absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 transition hover:bg-black/60"
                          >
                            <span className="flex size-12 items-center justify-center rounded-full bg-white ring-[3px] ring-white/40 group-hover:bg-white/90 group-hover:ring-white/50">
                              <FaPlay className="text-primary group-hover:text-primary/90 ml-1 size-4" />
                            </span>
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 size-7" />
        <CarouselNext className="absolute right-2 size-7" />
      </Carousel>
      <ul className="scrollbar-none text-muted-foreground mt-2 flex gap-2 overflow-x-auto px-3 py-2 text-center">
        {filteredMedia.map(
          ({ resource_type, resource_value, thumbnail_url }, i) => (
            <li key={i}>
              <button
                onClick={() => handlePreviewClick(i)}
                className={cn(
                  "relative aspect-video h-8 cursor-pointer overflow-hidden rounded-md",
                  selectedScrollSnap === i && "ring-primary ring-2",
                )}
              >
                <Image
                  fill
                  src={thumbnail_url || resource_value}
                  alt="Thumbnail"
                  sizes="55px"
                  className="bg-black object-cover md:bg-white"
                />
                {resource_type === "video" && (
                  <span className="absolute top-1/2 left-1/2 flex size-3.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white ring-[3px] ring-white/20">
                    <FaPlay className="ml-[1px] size-1.5 text-red-500" />
                  </span>
                )}
              </button>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
