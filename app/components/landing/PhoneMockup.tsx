import Image from "next/image";
import { BadgeCheck, CalendarDays, Globe, Mail, MessageCircle } from "lucide-react";

const links = [
  { icon: MessageCircle, label: "Fale no WhatsApp" },
  { icon: CalendarDays, label: "Agendar consulta" },
  { icon: Globe, label: "Site do escritório" },
  { icon: Mail, label: "Enviar e-mail" },
];

export default function PhoneMockup() {
  return (
    <div
      aria-hidden
      className="relative w-[210px] sm:w-[230px] md:w-[250px] aspect-[9/19] rounded-[2.5rem] border-[8px] border-[#07010f] bg-[#07010f] shadow-2xl shadow-indigo-900/30"
    >
      <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-[#07010f]" />

      <div className="flex h-full flex-col items-center overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#3e47aa] to-[#1e2470] px-4 pt-10 text-white">
        <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-cyan-300">
          <Image src="/slides/slide01.jpg" alt="" width={64} height={64} quality={90} className="h-full w-full object-cover" />
        </div>

        <p className="mt-3 flex items-center gap-1 text-sm font-semibold">
          Dra. Celinne Madruga
          <BadgeCheck className="h-4 w-4 text-cyan-300" />
        </p>
        <p className="text-[11px] text-indigo-100">OAB/RS 121.600 · Direito Tributário</p>

        <ul className="mt-5 w-full space-y-2.5">
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

        <p className="mt-auto mb-4 text-[10px] text-indigo-200">advolink.com.br/celinnemadruga</p>
      </div>
    </div>
  );
}
