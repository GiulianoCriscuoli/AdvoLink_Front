"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function LoginCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000
    })
  );

  const items = [
    {
      title: "Personalize seu Linktree",
      description: "Adicione seus links, redes sociais e muito mais.",
      image: "/slides/slide01.png",
    },
    {
      title: "Gerencie seus links",
      description: "Centralize todos os seus links em um único lugar.",
      image: "/slides/teste.png",
    },
    {
      title: "Analytics",
      description: "Acompanhe cliques e métricas em tempo real.",
      image: "/slides/wolverine.png",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full md:w-[450px] lg:w-[450px]"
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.title}>
            <div className="relative bg-gray-900 overflow-hidden">
  
              <div className="relative h-[450px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  loading={item === items[0] ? "eager" : "lazy"}
                  className="object-cover"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <h2 className="text-4xl font-black text-white mb-2 tracking-tight">
                  {item.title}
                </h2>
                <p className="text-gray-200 text-base font-semibold leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
        </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}