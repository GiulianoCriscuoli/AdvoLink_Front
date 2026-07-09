"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function authCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
    })
  );

  const items = [
    {
      title: "Personalize seu Linktree",
      description: "Adicione seus links, redes sociais e muito mais.",
      image: "/slides/slide01.jpg",
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
      opts={{ loop: true }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="hidden lg:block w-full h-full">

    <CarouselContent className="h-full">
        {items.map((item) => (
            <CarouselItem key={item.title} className="h-full">

                <div className="relative h-full min-h-[650px] overflow-hidden">

                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">

                        <h2 className="text-4xl font-black text-white">
                            {item.title}
                        </h2>

                        <p className="mt-2 text-white/90">
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