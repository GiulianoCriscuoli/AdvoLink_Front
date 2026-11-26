import Link from "next/link";
import { Check, Minus, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

const plans = [
  {
    id: "gratuito",
    name: "Gratuito",
    price: "R$ 0",
    period: "para sempre",
    description: "Para começar totalmente de graça.",
    features: [
      "Página profissional com seu link",
      "Botão de WhatsApp",
      "Até 5 links e redes sociais",
      "Modelos prontos para advocacia",
    ],
    // o que fica de fora, mostrado em cinza para incentivar o upgrade
    limitations: [
      "Marca AdvoLink na página",
      "Sem métricas de acesso",
    ],
    cta: "Comece grátis",
    color: "plan-free",
    featured: false,
  },
  {
    id: "essencial",
    name: "Essencial",
    price: "R$ 9,90",
    period: "/mês",
    description: "Para quem quer se destacar e ser encontrado.",
    features: [
      "Tudo do Gratuito",
      "Links ilimitados",
      "Personalização de cores, fotos e fontes",
      "Sem a marca AdvoLink na sua página",
      "Métricas de visualizações e cliques",
      "Suporte por chat e e-mail",
    ],
    cta: "Assinar Essencial",
    color: "plan-essential",
    featured: true,
  },
  {
    id: "profissional",
    name: "Profissional",
    price: "R$ 20,90",
    period: "/mês",
    description: "Para escritórios e advogados que querem ir além.",
    features: [
      "Tudo do Essencial",
      "Domínio próprio (seunome.adv.br)",
      "Agendamento integrado",
      "Integração com CRM e ferramentas externas",
      "Criação de páginas com IA",
      "Relatórios completos de desempenho",
      "Suporte prioritário",
    ],
    cta: "Assinar Profissional",
    color: "plan-pro",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="planos"
      aria-labelledby="planos-title"
      className="section-spacing md:pb-22"
    >
      <div className="max-w-6xl container mx-auto flex flex-col items-center justify-center">
        <Reveal className="max-w-2xl px-4 text-center">
          <h2 id="planos-title" className="section-title text-balance">
            Um plano para cada momento da sua advocacia
          </h2>
          <p className="mt-4 text-lg text-balance text-slate-700">
            Seja você advogado ou escritório, comece grátis
            e evolua no seu ritmo. Sem fidelidade.
          </p>
        </Reveal>

        <ul className="plan-cards mt-16 grid w-full gap-8 md:grid-cols-3 md:items-stretch md:gap-6">
          {plans.map((plan, i) => (
            <Reveal
              as="li"
              key={plan.id}
              delay={i * 0.15}
              className={cn("flex", plan.featured && "order-first z-10 md:order-0")}
            >
            <div
              className={cn(
                "plan-card relative flex flex-1 flex-col rounded-3xl p-8 text-white",
                plan.color,
                plan.featured
                  ? "shadow-2xl shadow-indigo-900/40 ring-4 ring-cyan-300/70 md:-my-6 md:py-14"
                  : "shadow-lg"
              )}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-linear-to-r from-cyan-300 to-cyan-500 px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-lg shadow-cyan-500/40">
                  <Sparkles aria-hidden className="size-4" />
                  Mais popular
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm text-white/80">
                {plan.description}
              </p>

              <p className="mt-6 flex items-baseline gap-1 border-b border-white/20 pb-6">
                <span className={cn("font-black tracking-tight", plan.featured ? "text-5xl" : "text-4xl")}>
                  {plan.price}
                </span>
                <span className="text-sm text-white/80">{plan.period}</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                        plan.featured ? "bg-cyan-300 text-slate-900" : "bg-white/20"
                      )}
                    >
                      <Check aria-hidden className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-white/95">{feature}</span>
                  </li>
                ))}
                {plan.limitations?.map((limitation) => (
                  <li key={limitation} className="flex items-start gap-3 text-white/55">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-white/30">
                      <Minus aria-hidden className="size-3.5" strokeWidth={3} />
                    </span>
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/auth/registrar"
                target="_blank"
                className={cn(
                  "mt-8 block rounded-xl px-6 py-3 text-center font-semibold transition",
                  plan.featured
                    ? "bg-white text-(--cta-primary) shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                    : "border border-white/60 text-white hover:bg-white hover:text-(--cta-primary)"
                )}
              >
                {plan.cta}
              </Link>
            </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
