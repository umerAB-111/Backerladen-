import Img from "@/components/Img";

export default function KontaktPage() {
  return (
    <>
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r from-[#5B9BD5] to-[#B8D4E3]">
        <div className="absolute inset-0 opacity-10">
          <Img
            src="/images/Screenshot_20260704-112704.png"
            alt="Kontakt"
            fill
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold">Kontakt</h1>
          <p className="mt-2 text-white/90">Wir freuen uns auf Sie</p>
        </div>
      </section>

      <section className="py-16 bg-[#EBF3FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#B8D4E3]/30">
                <h2 className="text-2xl font-bold text-dark mb-6">Besuchen Sie uns</h2>
                <div className="space-y-5 text-foreground/80">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-[#EBF3FA] rounded-full flex items-center justify-center text-lg text-[#5B9BD5]">📍</span>
                    <div>
                      <p className="font-semibold text-dark">Bäckerladen</p>
                      <p>Musterstraße 42</p>
                      <p>12345 Musterstadt</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-[#EBF3FA] rounded-full flex items-center justify-center text-lg text-[#5B9BD5]">📞</span>
                    <div>
                      <p>Telefon: 01234 / 567890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-[#EBF3FA] rounded-full flex items-center justify-center text-lg text-[#5B9BD5]">✉️</span>
                    <div>
                      <p>hallo@backerladen.de</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm border border-[#B8D4E3]/30">
                <h2 className="text-2xl font-bold text-dark mb-6">Öffnungszeiten</h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                  {[
                    ["Montag", "06:00 – 18:00"],
                    ["Dienstag", "06:00 – 18:00"],
                    ["Mittwoch", "06:00 – 18:00"],
                    ["Donnerstag", "06:00 – 18:00"],
                    ["Freitag", "06:00 – 18:00"],
                    ["Samstag", "06:00 – 13:00"],
                    ["Sonntag", "08:00 – 11:00"],
                  ].map(([day, time]) => (
                    <div key={day} className="contents">
                      <span className="text-foreground/70">{day}</span>
                      <span className="text-[#5B9BD5] font-semibold text-right">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative aspect-square lg:aspect-auto rounded-2xl overflow-hidden shadow-sm border border-[#B8D4E3]/30">
              <Img
                src="/images/Screenshot_20260704-112759.png"
                alt="Bäckerladen – Ihre Bäckerei"
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
