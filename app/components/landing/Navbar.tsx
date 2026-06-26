import Link from "next/link";

export function Navbar() {
  return (
    <nav className=" text-white py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">ADvoLink</div>
            <div className="space-x-4 flex items-center">
              <Link href="/login" target="_blank" className="px-4 py-2 rounded-lg border border-white/20 text-sm hover:bg-white/10 transition-colors">Entrar</Link>
              <Link href="/comece-free" target="_blank" className="px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:opacity-90 transition-opacity">Comece Free</Link>
            </div>
          </div>
        </div>
    </nav>
  );
}