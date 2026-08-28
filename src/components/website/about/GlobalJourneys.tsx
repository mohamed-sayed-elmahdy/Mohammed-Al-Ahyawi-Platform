import Image from "next/image";

const countries = [
  {
    name: "السعودية",
    flag: "/flags/sa.svg",
  },
  {
    name: "مصر",
    flag: "/flags/eg.svg",
  },
  {
    name: "الإمارات",
    flag: "/flags/uea5.png",
  },
  {
    name: "تركيا",
    flag: "/flags/tr.svg",
  },
  {
    name: "جورجيا",
    flag: "/flags/ge.svg",
  },
];

export function GlobalJourneys() {
  return (
    <section className="rounded-[30px] border border-(--color-accent)/45 bg-(--color-surface)/55 p-8 sm:p-10">
      <h2 className="font-alexandria text-center text-3xl font-bold text-(--color-accent)">
        جولات تمتد عبر عدة وجهات
      </h2>

      <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
        {countries.map(({ flag, name }) => (
          <div key={name} className="flex flex-col items-center text-center">
            <div className="flex size-16 items-center justify-center overflow-hidden rounded-full border border-(--color-accent)/30 bg-(--color-background)/50 shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:size-18 md:size-20">
              <Image
                src={flag}
                alt={`علم ${name}`}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-4 text-sm font-medium text-(--color-secondary-text) sm:text-base">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}