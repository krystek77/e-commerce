export const metadata = {
    title:"E-commerce - wyposażenie pralni przemysłowej",
    description:"Industrial Laundry Systems - przemysłowe pralki, pralnicowirówki, suszarki bębnowe"
}

export default function EquipmentLayout({children}) {
 
  return (
    <section className="border-t border-b border-slate-100">
      <div className="container mx-auto grid grid-cols-300/fr">
        <h2 className="col-span-2 border">.....</h2>
        <aside className="border">FILTERS</aside>
        <main className="border">{children}</main>
      </div>
    </section>
  );
}