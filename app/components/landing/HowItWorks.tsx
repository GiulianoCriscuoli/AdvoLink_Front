import PhoneMockup from "./PhoneMockup";

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
      className="bg-background mt-20"
    >
      <div className="max-w-6xl container mx-auto flex flex-col items-center justify-center">
        <div className="w-[80%] max-w-2xl">
          <h2
            id="como-funciona-title"
            className="text-black text-5xl font-bold">
            Seja encontrado por quem precisa de você
          </h2>
        </div>

        <div className="mt-16 flex w-full flex-col items-center gap-12 md:flex-row md:justify-center md:gap-20">
        <ol className="max-w-xl">
            {steps.map((step, i) => (
                <li key={step.number} className="group relative flex gap-6 pb-12 last:pb-0">
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-12 top-20 bottom-3 -translate-x-1/2 border-l-2 border-dashed border-indigo-200"
                    />
                  )}

                  <span className="w-24 shrink-0 text-center text-7xl leading-none bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
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
                </li>
            ))}
        </ol>
          <div className="shrink-0">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
} 