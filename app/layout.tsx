import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google'
import SmoothScroll from "@/components/ui/SmoothScroll";
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
