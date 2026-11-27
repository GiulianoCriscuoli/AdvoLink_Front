import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google'
import SmoothScroll from "@/components/ui/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";
import "@/css/main.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: "ADvoLink — Link na bio para advogados",
  description: "Reúna WhatsApp, agendamento, site e redes sociais em uma página profissional, feita para a advocacia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* aplica o tema escuro salvo antes da página aparecer, para não piscar claro */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
