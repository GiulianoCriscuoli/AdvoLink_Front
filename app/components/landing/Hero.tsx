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
        text: "Compliance garantido pelo ",
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
        <section className="hero text-white">
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
                        <p className="text-lg md:text-xl mb-8">A plataforma que centraliza seus contatos, redes e páginas em um só link, com compliance garantido pelo Código de Ética da OAB.</p>
                        <div className="hero-cta space-x-4">
                            <Link href="/auth/registrar" target="_blank" className="px-6 py-3 rounded-lg text-black text-sm font-semibold hover:opacity-90 transition-opacity">Comece Free</Link>
                        </div>
                    </div>
                    <div
                    className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] overflow-hidden shrink-0"
                    style={{ borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%" }}>
                    <Image
                        src="/slides/slide01.jpg"
                        alt="Foto"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
                        priority/>
                    </div>
                </div>
            </div>  
        </section>
    );
}