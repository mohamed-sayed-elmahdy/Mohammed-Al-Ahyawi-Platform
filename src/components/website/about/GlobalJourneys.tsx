
const countries = [
    { flag: "🇸🇦", name: "السعودية",   },
    { flag: "🇪🇬", name: "مصر" },
    { flag: "🇦🇪", name: "الإمارات" },
    { flag: "🇹🇷", name: "تركيا" },
    { flag: "🇬🇪", name: "جورجيا" }];
export function GlobalJourneys() {
    return <section className="rounded-[30px] border border-(--color-accent)/45 
                    bg-(--color-surface)/55 p-8 sm:p-10"><h2 className="font-alexandria 
                    text-center text-3xl font-bold text-(--color-accent)">جولات تمتد عبر عدة وجهات</h2>
        <div className="mt-9 grid grid-cols-5 gap-5">{countries.map(({ flag, name }) =>
            <div key={name} className="text-center">
                <span className="block text-5xl drop-shadow-md">{flag}</span>
                <p className="mt-4 text-base font-medium text-(--color-secondary-text)">{name}
                </p></div>)}</div>
    </section>;
}
