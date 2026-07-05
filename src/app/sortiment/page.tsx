import Image from "next/image";

const products = [
  {
    category: "Brot",
    items: [
      { name: "Bauernbrot", desc: "Klassisch, rustikal, mit Sauerteig – 1,5 kg", price: "€ 4,50" },
      { name: "Roggenbrot", desc: "Feinherb, dunkel, lange Teigführung – 1 kg", price: "€ 3,80" },
      { name: "Dinkelbrot", desc: "Leicht nussig, aus Bio-Dinkel – 1 kg", price: "€ 4,20" },
      { name: "Körnerbrot", desc: "Volles Korn, reich an Ballaststoffen – 1 kg", price: "€ 4,00" },
      { name: "Vollkornbrot", desc: "Aus ganzen Körnern, herzhaft – 1 kg", price: "€ 3,90" },
      { name: "Weißbrot", desc: "Locker, luftig, feinporig – 750 g", price: "€ 3,20" },
    ],
  },
  {
    category: "Brötchen",
    items: [
      { name: "Laugenbrötchen", desc: "Mit grobem Salz bestreut, knusprig", price: "€ 0,80" },
      { name: "Kaiserbrötchen", desc: "Klassisch gerillt, goldgelb gebacken", price: "€ 0,70" },
      { name: "Rosinenbrötchen", desc: "Süß, saftig, mit saftigen Rosinen", price: "€ 0,90" },
      { name: "Mehrkornbrötchen", desc: "Mit Leinsaat, Sonnenblumenkernen & Hafer", price: "€ 0,85" },
      { name: "Dinkelbrötchen", desc: "Aus feinem Dinkelmehl, leicht bekömmlich", price: "€ 0,80" },
      { name: "Ciabatta", desc: "Italienisch, luftig, mit Olivenöl", price: "€ 1,50" },
    ],
  },
  {
    category: "Feingebäck",
    items: [
      { name: "Buttercroissant", desc: "Mürbe, buttrig, blättrig", price: "€ 1,20" },
      { name: "Streuselteilchen", desc: "Saftiger Hefeteig mit Butterstreusel", price: "€ 1,10" },
      { name: "Berliner", desc: "Klassisch mit Marmelade gefüllt, mit Puderzucker", price: "€ 1,30" },
      { name: "Zimtschnecke", desc: "Mit feiner Zimtfüllung und Frischkäseglasur", price: "€ 1,50" },
    ],
  },
];

export default function SortimentPage() {
  return (
    <>
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r from-dark to-primary">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/Screenshot_20260704-112659.png"
            alt="Sortiment"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold">Unser Sortiment</h1>
          <p className="mt-2 text-white/80">Handgemacht. Frisch. Köstlich.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {products.map((group) => (
          <div key={group.category} className="mb-16 last:mb-0">
            <h2 className="text-2xl font-bold text-dark mb-8 pb-4 border-b border-cream">
              {group.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl p-6 border border-cream hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-dark">{item.name}</h3>
                  <p className="mt-1 text-sm text-foreground/60">{item.desc}</p>
                  <p className="mt-3 text-primary font-bold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
