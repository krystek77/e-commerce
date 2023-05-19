export const metadata = {
    title:"E-commerce - części zamienne do przemysłowych urządzeń pralniczych",
    description:"Industrial Laundry Systems - części zamienne do wszystkich przemysłowych urządzeń pralniczych"
}

export default function SparePartsLayout({children}) {
 
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