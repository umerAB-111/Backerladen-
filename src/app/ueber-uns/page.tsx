import Image from "next/image";
import ThreeBackgroundWrapper from "@/components/ThreeBackgroundWrapper";

const team = [
  { name: "Thomas Berger", role: "Bäckermeister & Gründer", img: "", desc: "Mit über 20 Jahren Erfahrung führt Thomas die Bäckerei mit Leidenschaft und traditionellem Handwerk." },
  { name: "Sarah Klein", role: "Konditormeisterin", img: "", desc: "Sarah zaubert die feinsten Gebäcke und Kuchen – mit Liebe zum Detail und kreativen Rezepten." },
  { name: "Markus Weber", role: "Bäckergeselle", img: "", desc: "Markus ist unser Frühaufsteher und sorgt dafür, dass das Brot pünktlich um 6 Uhr fertig ist." },
];

const values = [
  { icon: "🌾", title: "Regionale Zutaten", desc: "Wir beziehen Mehl, Getreide und weitere Zutaten bevorzugt von lokalen Bauern und Mühlen." },
  { icon: "🕰️", title: "Lange Teigführung", desc: "Unser Brot bekommt die Zeit, die es braucht – für besten Geschmack und beste Bekömmlichkeit." },
  { icon: "🤝", title: "Handarbeit", desc: "Jeder Teig wird von Hand geknetet, geformt und mit Sorgfalt gebacken." },
  { icon: "♻️", title: "Nachhaltigkeit", desc: "Wir vermeiden Verpackungsmüll, nutzen Mehrweg und arbeiten so ressourcenschonend wie möglich." },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-primary/60 z-10" />
        <ThreeBackgroundWrapper />
        <Image
          src="/images/Screenshot_20260704-112659.png"
          alt="Über uns"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold">Über uns</h1>
          <p className="mt-2 text-white/80">Unsere Geschichte, unser Team, unsere Werte</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Unsere Geschichte</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-dark">Vom Brotliebhaber zum Bäckermeister</h2>
          </div>
          <div className="prose prose-lg mx-auto text-foreground/80 leading-relaxed">
            <p>
              Der <strong>Backerladen</strong> wurde im Jahr 2024 aus einer einfachen Idee heraus geboren:
              Brot zu backen, das schmeckt wie früher – ehrlich, handgemacht und mit hochwertigen Zutaten.
            </p>
            <p>
              Unser Gründer und Bäckermeister <strong>Thomas Berger</strong> hat nach Jahren in der
              Gastronomie beschlossen, seiner wahren Leidenschaft zu folgen: dem Bäckerhandwerk.
              Nach der Meisterausbildung und intensiven Reisen durch Europas Backkulturen hat er
              sich mit dem Backerladen in Musterstadt selbstständig gemacht.
            </p>
            <p>
              Heute backen wir täglich frisch nach traditionellen Rezepten, die über Generationen
              weitergegeben wurden – kombiniert mit modernem Wissen über Teigführung und
              Ernährung. Jedes Brot ist ein Unikat und spiegelt die Sorgfalt und Leidenschaft
              wider, die wir in unsere Arbeit stecken.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Unser Team</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-dark">Die Menschen hinter dem Backerladen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-cream rounded-2xl p-8 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-3xl">
                  👨‍🍳
                </div>
                <h3 className="mt-4 text-lg font-bold text-dark">{member.name}</h3>
                <p className="text-primary text-sm font-semibold">{member.role}</p>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-light text-sm font-semibold uppercase tracking-widest">Unsere Werte</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Wofür wir stehen</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <span className="text-4xl">{value.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{value.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
