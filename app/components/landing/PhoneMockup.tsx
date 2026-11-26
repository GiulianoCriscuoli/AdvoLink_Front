import { BadgeCheck, CalendarDays, Globe, Mail, MessageCircle, UserRound } from "lucide-react";

const links = [
  { icon: MessageCircle, label: "Fale no WhatsApp" },
  { icon: CalendarDays, label: "Agendar consulta" },
  { icon: Globe, label: "Site do escritório" },
  { icon: Mail, label: "Enviar e-mail" },
];

const areas = ["Família", "Divórcio", "Inventário"];

export default function PhoneMockup() {
  return (
    <div
      aria-hidden
      className="relative w-60 md:w-62.5 aspect-9/19 rounded-[2.5rem] border-8 border-[#07010f] bg-[#07010f] shadow-2xl shadow-indigo-900/30"
    >
      <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-[#07010f]" />

      <div className="flex h-full flex-col items-center overflow-hidden rounded-[2rem] bg-linear-to-b from-[#3e47aa] to-[#1e2470] px-4 pt-10 text-white">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
          <UserRound className="h-7 w-7 text-white/60" strokeWidth={1.5} />
        </div>

        <p className="mt-3 flex items-center gap-1 text-sm font-semibold">
          Dra. Ana Ribeiro
          <BadgeCheck className="h-4 w-4 text-cyan-300" />
        </p>
        <p className="text-center text-[11px] text-indigo-100">OAB/SP 000.000 · Direito de Família</p>

        <ul className="mt-4 w-full space-y-2 sm:mt-5 sm:space-y-2.5">
          {links.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2.5 text-[12px] font-semibold text-[#3e47aa] shadow-sm"
            >
              <Icon className="h-4 w-4 shrink-0 text-[#0e7490]" />
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-4 w-full text-center sm:mt-5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-indigo-200">Áreas de atuação</p>
          <div className="mt-2 flex flex-wrap justify-center gap-1.5">
            {areas.map((area) => (
              <span key={area} className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/90 ring-1 ring-white/15">
                {area}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-auto mb-4 text-[10px] text-indigo-200">advolink.com.br/anaribeiro</p>
      </div>
    </div>
  );
}
