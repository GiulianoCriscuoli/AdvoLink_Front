'use client';
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";
import { CalendarDays, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const titles = [
    {
        text: "O link na bio feito ",
        highlight: "para advogados"
    },
    {
        text: "Centralize seus contatos, redes e páginas ",
        highlight: "em um só link"
    },
    {
        text: "Pensado para o ",
        highlight: "Código de Ética da OAB"
    }
];


export default function Hero() {

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setIndex(i => i >= titles.length - 1 ? 0 : i + 1);
        }, 5000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section className="hero relative isolate overflow-hidden pt-10 pb-16 max-md:-mx-4 md:pt-8">
            <div className="container mx-auto">
                <div className="hero-content flex flex-col items-center gap-12 px-6 md:flex-row md:justify-between md:px-0">
                    <div className="hero-description">
                        <div className="hero-title-box grid w-full max-w-3xl overflow-hidden">
                            {titles.map((title) => (
                                <div key={title.highlight} aria-hidden className="hero-title invisible col-start-1 row-start-1">
                                    {title.text} {title.highlight}
                                </div>
                            ))}
                            <AnimatePresence mode="wait">
                                <motion.h1
                                    key={index}
                                    className="hero-title col-start-1 row-start-1"
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -40, opacity: 0 }}
                                >
                                    {titles[index].text}{" "}
                                    <span className="bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                                        {titles[index].highlight}
                                    </span>
                                </motion.h1>
                            </AnimatePresence>
                        </div>
                        <p>Reúna WhatsApp, agendamento, site e redes sociais em uma página profissional, feita para a advocacia.</p>
                        <div className="hero-cta">
                            <Link href="/auth/registrar" target="_blank">Comece grátis</Link>
                        </div>
                    </div>
                    <div className="hero-visual relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-105 lg:h-105 shrink-0">
                        {/* formas sólidas atrás da foto */}
                        <div aria-hidden className="hero-shape-solid absolute inset-0 translate-x-5 translate-y-5 rotate-6" />
                        <div aria-hidden className="hero-shape-outline absolute inset-0 -translate-x-4 -translate-y-4 -rotate-6" />
                        <div className="hero-photo relative h-full w-full overflow-hidden">
                            <Image
                                src="/slides/slide01.jpg"
                                alt="Advogada usando o celular"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
                                quality={90}
                                preload/>
                        </div>

                        <div aria-hidden className="hero-chip absolute -left-6 top-10 sm:-left-10">
                            <span className="flex size-9 items-center justify-center rounded-full bg-emerald-500 text-white">
                                <MessageCircle className="size-5" />
                            </span>
                            <span>
                                <strong className="block text-sm text-slate-900">Fale no WhatsApp</strong>
                            </span>
                        </div>
                        <div aria-hidden className="hero-chip hero-chip-delay absolute -right-4 bottom-8 sm:-right-8">
                            <span className="flex size-9 items-center justify-center rounded-full bg-(--cta-primary) text-white">
                                <CalendarDays className="size-5" />
                            </span>
                            <span>
                                <strong className="block text-sm text-slate-900">Consulta agendada</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    );
}