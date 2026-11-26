"use client";

import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Faz o elemento aparecer suavemente quando entra na tela ao rolar
 * (equivalente ao data-aos="fade-up" / "fade-right" do AOS).
 */

const offsets = {
  up: { y: 60 },
  "from-left": { x: -80 },
  "from-right": { x: 80 },
  none: {},
} as const;

type RevealProps = {
  children: ReactNode;
  as?: "div" | "li";
  direction?: keyof typeof offsets;
  /** atraso em segundos, útil para criar efeito cascata em listas */
  delay?: number;
  duration?: number;
  className?: string;
};

export default function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.8,
  className,
}: RevealProps) {
  const Component = as === "li" ? motion.li : motion.div;

  return (
    // reducedMotion="user": quem pediu menos animação no sistema vê só o fade, sem deslocamento
    <MotionConfig reducedMotion="user">
      <Component
        className={className}
        initial={{ opacity: 0, ...offsets[direction] }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Component>
    </MotionConfig>
  );
}
