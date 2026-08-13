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
        <div className="max-w-2xl">
          <h2
            id="como-funciona-title"
            className="text-black text-5xl font-bold">
            Seja encontrado e gere mais leads com o seu link na bio das redes sociais
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
                <article key={step.number} className="group">
                    <span className="text-6xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                        {step.number}
                    </span>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold">
                            {step.title}
                        </h3>

                        <p className="mt-3 max-w-sm leading-7 text-muted-foreground">
                            {step.description}
                        </p>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </section>
  );
} 