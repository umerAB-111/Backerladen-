import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo className="w-28 mb-4 [&_text]:fill-white" />
            <p className="text-sm text-white/60 leading-relaxed">
              Handgemachtes Brot und Brötchen aus traditioneller Bäckerei. Mit Liebe gebacken seit 2024.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide uppercase text-sm">Seiten</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Start</Link>
              <Link href="/sortiment" className="text-sm text-white/60 hover:text-white transition-colors">Sortiment</Link>
              <Link href="/kontakt" className="text-sm text-white/60 hover:text-white transition-colors">Kontakt</Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide uppercase text-sm">Kontakt</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Backerladen<br />
              Musterstraße 42<br />
              12345 Musterstadt
            </p>
            <p className="text-sm text-white/60 mt-2">
              Tel: 01234 / 567890
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Backerladen. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
