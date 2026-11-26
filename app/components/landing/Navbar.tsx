"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const menuLinks = [
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="relative z-20 py-6 md:py-8">
      <div className="container mx-auto px-6 md:px-0">
        <div className="flex items-center justify-between">
            <Link href="/" aria-label="AdvoLink, página inicial" className="logo flex font-bold">
              ADvo
              <span className="relative bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                Link
                <span className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 opacity-80" />
              </span>
            </Link>

            {/* desktop */}
            <ul className="menu-options hidden gap-6 md:flex">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-opacity hover:opacity-80">{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="hidden items-center gap-4 md:flex">
              <Link href="/auth/login" target="_blank" className="login-button">Entrar</Link>
              <div className="hero-cta">
                <Link href="/auth/registrar" target="_blank">Comece grátis</Link>
              </div>
            </div>

            {/* celular */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="flex size-11 items-center justify-center rounded-lg text-(--cta-primary) md:hidden"
            >
              {open ? <X className="size-7" /> : <Menu className="size-7" />}
            </button>
        </div>

        {open && (
          <div
            id="menu-mobile"
            className="absolute inset-x-4 top-full rounded-2xl bg-white p-6 shadow-xl shadow-indigo-900/15 md:hidden"
          >
            <ul className="menu-options flex flex-col gap-4">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={close}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/auth/login" target="_blank" onClick={close} className="login-button">Entrar</Link>
              <div className="hero-cta">
                <Link href="/auth/registrar" target="_blank" onClick={close} className="w-full text-center">Comece grátis</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
