'use client';
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";
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
        <section className="hero relative isolate overflow-hidden text-white pb-16">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="bg-dots absolute inset-0" />
                <div className="absolute left-[10%] bottom-0 h-[320px] w-[320px] rounded-full bg-indigo-500/15 blur-3xl" />
            </div>
            <div className="mx-auto">
                <div className="hero-content flex flex-col md:flex-row">
                    <div className="hero-description">
                        <div className="relative h-40 w-full max-w-xl overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.h1
                                    key={index}
                                    className="absolute inset-0 text-5xl font-bold"
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -40, opacity: 0 }}
                                >
                                    {titles[index].text}{" "}
                                    <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                                        {titles[index].highlight}
                                    </span>
                                </motion.h1>
                            </AnimatePresence>
                            </div>
                        <p className="text-lg md:text-xl mb-8">Reúna WhatsApp, agendamento, site e redes sociais em uma página profissional, feita para a advocacia.</p>
                        <div className="hero-cta space-x-4">
                            <Link href="/auth/registrar" target="_blank" className="px-6 py-3 rounded-lg text-black text-sm font-semibold hover:opacity-90 transition-opacity">Comece grátis</Link>
                        </div>
                    </div>
                    <div
                    className="relative mt-10 md:mt-0 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] overflow-hidden shrink-0"
                    style={{ borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%" }}>
                    <Image
                        src="/slides/slide01.jpg"
                        alt="Advogada usando o celular"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
                        quality={90}
                        preload/>
                    </div>
                </div>
            </div>  
        </section>
    );
}