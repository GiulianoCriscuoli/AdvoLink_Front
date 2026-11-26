"use client";

import { FormEvent } from "react";

import Reveal from "@/components/ui/Reveal";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { whatsappLink } from "@/lib/whatsapp";

const fieldClass =
  "mt-2 w-full rounded-xl border border-transparent bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-2 focus:ring-cyan-300";

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("nome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("mensagem") ?? "").trim();

    const text = [
      `Olá! Meu nome é ${name}.`,
      message,
      email && `E-mail para contato: ${email}`,
    ]
      .filter(Boolean)
      .join("\n\n");

    window.open(
      whatsappLink(text),
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section id="contato" aria-labelledby="contato-title" className="section-spacing">
      <div className="max-w-6xl container mx-auto flex flex-col items-center justify-center md:px-8">
        <Reveal className="max-w-2xl px-4 text-center">
          <h2 id="contato-title" className="section-title text-balance">
            Ficou com alguma dúvida?
          </h2>
          <p className="mt-4 text-lg text-balance text-slate-700">
            Mande sua mensagem e fale com a gente direto pelo WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 w-full max-w-xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-(--cta-primary) p-6 shadow-2xl shadow-indigo-900/30 min-[340px]:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-white">
                Nome
                <input name="nome" required autoComplete="name" placeholder="Seu nome" className={fieldClass} />
              </label>
              <label className="block text-sm font-semibold text-white">
                E-mail <span className="font-normal text-white/70">(opcional)</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="voce@email.com"
                  className={fieldClass}
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-semibold text-white">
              Mensagem
              <textarea
                name="mensagem"
                required
                rows={4}
                placeholder="Como podemos ajudar?"
                className={`${fieldClass} resize-none`}
              />
            </label>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              <WhatsAppIcon className="size-5" />
              Enviar pelo WhatsApp
            </button>

            <p className="mt-4 text-center text-xs text-white/80">
              Sua mensagem abre no WhatsApp e não fica salva no nosso site.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
