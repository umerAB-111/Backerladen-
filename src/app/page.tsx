import Image from "next/image";
import Link from "next/link";
import ThreeBackgroundWrapper from "@/components/ThreeBackgroundWrapper";
import Reveal from "@/components/Reveal";

const testimonials = [
  { text: "Das beste Bauernbrot weit und breit! Seit ich beim Backerladen kaufe, will ich kein Brot mehr aus dem Supermarkt.", name: "Anna M.", role: "Stammkundin" },
  { text: "Die Laugenbrötchen sind der Hammer – knusprig, salzig, perfekt. Und das Team ist immer freundlich!", name: "Jonas K.", role: "Frühaufsteher" },
  { text: "Endlich eine Bäckerei, die noch ehrliches Handwerk betreibt. Man schmeckt die Liebe in jedem Bissen.", name: "Claudia R.", role: "Genussmensch" },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40 z-20" />
        <ThreeBackgroundWrapper />
        <Image
          src="/images/Screenshot_20260704-112650.png"
          alt="Frisches Brot aus dem Ofen"
          fill
          className="object-cover"
          priority
        />
        <Reveal className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Frisch gebacken.
              <br />
              <span className="text-primary-light">Mit Liebe.</span>
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-md">
              Traditionelle Bäckerei mit handgemachten Brot- und Brötchenspezialitäten – jeden Tag frisch für Sie gebacken.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/sortiment"
                className="inline-flex items-center px-6 py-3 bg-primary text-white text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-primary/90 transition-colors"
              >
                Unser Sortiment
              </Link>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-white/10 transition-colors"
              >
                Über uns
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="py-20 bg-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">Willkommen beim Backerladen</h2>
              <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
                Wir backen nach traditionellen Rezepten mit ausgewählten Zutaten. Bei uns steht Qualität und Handwerk an erster Stelle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Handwerkskunst", desc: "Jedes Brot wird von unseren Bäckermeistern mit viel Erfahrung und Sorgfalt von Hand gefertigt.", icon: "🥖" },
                { title: "Natürliche Zutaten", desc: "Wir verwenden ausschließlich hochwertige, regionale Zutaten – ohne künstliche Zusätze.", icon: "🌾" },
                { title: "Frische garantiert", desc: "Täglich frisch gebacken – schon am frühen Morgen duftet es bei uns nach knusprigem Brot.", icon: "🔥" },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 150}>
                  <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-4xl">{item.icon}</span>
                    <h3 className="mt-4 text-lg font-bold text-dark">{item.title}</h3>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/Screenshot_20260704-112654.png"
                  alt="Unser Sortiment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Unser Sortiment</span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-dark">
                  Brot & Brötchen
                </h2>
                <p className="mt-4 text-foreground/70 leading-relaxed">
                  Von klassischem Bauernbrot über knusprige Brötchen bis hin zu feinem Roggenbrot – bei uns finden Sie eine vielfältige Auswahl an Backwaren für jeden Geschmack.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {["Bauernbrot", "Roggenbrot", "Dinkelbrot", "Körnerbrot", "Laugenbrötchen", "Rosinenbrötchen"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sortiment"
                  className="mt-8 inline-flex items-center px-6 py-3 bg-primary text-white text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-primary/90 transition-colors"
                >
                  Alle Produkte
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-20 bg-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Kundenstimmen</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-dark">Was unsere Kunden sagen</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 150}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col">
                    <span className="text-4xl text-primary-light/50 leading-none mb-4">&ldquo;</span>
                    <p className="text-foreground/80 leading-relaxed flex-1">{t.text}</p>
                    <div className="mt-6 pt-4 border-t border-cream">
                      <p className="font-semibold text-dark">{t.name}</p>
                      <p className="text-sm text-foreground/50">{t.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-20 bg-dark text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Öffnungszeiten</h2>
            <p className="mt-2 text-white/60">Besuchen Sie uns – wir freuen uns auf Sie!</p>
            <div className="mt-8 inline-block bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-left text-sm">
                {[
                  ["Montag – Freitag", "06:00 – 18:00"],
                  ["Samstag", "06:00 – 13:00"],
                  ["Sonntag", "08:00 – 11:00"],
                ].map(([day, time]) => (
                  <div key={day} className="contents">
                    <span className="text-white/80">{day}</span>
                    <span className="text-primary-light font-semibold text-right">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
