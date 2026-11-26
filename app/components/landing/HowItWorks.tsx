import PhoneMockup from "./PhoneMockup";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Crie seu perfil",
    description:
      "Apresente sua trajetória, áreas de atuação, formação e informações profissionais em um único lugar.",
  },
  {
    number: "02",
    title: "Personalize sua página",
    description:
      "Organize seus conteúdos, links, redes sociais e formas de contato com a identidade que representa você.",
  },
  {
    number: "03",
    title: "Acompanhe seus resultados",
    description:
      "Compartilhe sua página e acompanhe visualizações, cliques e outras métricas da sua presença digital.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="section-spacing overflow-x-clip"
    >
      <div className="max-w-6xl container mx-auto flex flex-col items-center justify-center">
        <Reveal className="max-w-2xl px-4 text-center">
          <h2 id="como-funciona-title" className="section-title text-balance">
            Seja encontrado por quem precisa de você
          </h2>
        </Reveal>

        <div className="mt-12 flex w-full flex-col items-center gap-12 md:flex-row md:justify-center md:gap-20">
        <ol className="max-w-xl">
            {steps.map((step, i) => (
                <Reveal
                  as="li"
                  key={step.number}
                  delay={i * 0.15}
                  className="group relative flex gap-6 pb-12 last:pb-0"
                >
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-12 top-20 bottom-3 -translate-x-1/2 border-l-2 border-dashed border-indigo-200"
                    />
                  )}

                  <span className="w-24 shrink-0 text-center text-7xl leading-none bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                    {step.number}
                  </span>

                  <div className="pt-1">
                    <h3 className="text-xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-md text-lg leading-8 text-slate-700">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
            ))}
        </ol>
          <Reveal direction="from-right" delay={0.2} className="shrink-0">
            <PhoneMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
} 