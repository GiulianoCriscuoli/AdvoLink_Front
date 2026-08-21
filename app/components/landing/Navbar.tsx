import Link from "next/link";

export function Navbar() {
  return (
    <nav className=" text-white py-8">
      <div className="container mx-auto">
        <div className="nav-area flex justify-between items-center">
            <div className="logo flex text-xl font-bold">
              ADvo
              <div className="relative bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                Link
                <span className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 opacity-80" />
              </div>
            </div>
            <div className="menu-options">
              <ul className="flex space-x-6">
                <li><Link href="#como-funciona" className="hover:opacity-90 transition-opacity">Como Funciona</Link></li>
                <li><Link href="#planos" className="hover:opacity-90 transition-opacity">Planos</Link></li>
                <li><Link href="#contato" className="hover:opacity-90 transition-opacity">Contato</Link></li>
              </ul>
            </div>
            <div className="space-x-4 flex items-center">
              <Link href="auth/login" target="_blank" className="login-button px-4 py-2 rounded-lg text-black text-sm font-semibold hover:opacity-90 transition-opacity">Entrar</Link>
              <div className="hero-cta space-x-4">
                <Link href="/auth/registrar" target="_blank" className="px-6 py-3 rounded-lg text-black text-sm font-semibold hover:opacity-90 transition-opacity">Comece Free</Link>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
}