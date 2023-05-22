import data from "@utils/data";
import Link from "next/link";


export const metadata = {
  title: "E-commerce - wyposażenie pralni przemysłowej",
  description:
    "Industrial Laundry Systems - przemysłowe pralki, pralnicowirówki, suszarki bębnowe",
};

function getData(slug) {
  try {
    //fetch data
    const response = data.filter((item) => item.url === slug);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export default function EquipmentLayout({ children }) {

  const data = getData("urzadzenia-pralnicze")[0];
  return (
    <section className="">
      <div className="container mx-auto">
      <h1 className="">Urządzenia</h1>
      <div className="grid grid-cols-1 lg:grid-cols-300/fr auto-rows-auto gap-4">
        <aside className="border">
          <div>
            <Link href={data.url}>
              <h2 className="lowercase">
                Wszystkie: <b className="capitalize">{data.label}</b>
              </h2>
            </Link>
          </div>
          {data.categories?.length ? (
            <ul>
              {data.categories.map((item) => (
                <li className="py-2 border-b border-black-light" key={item._id}>
                  <Link href={`${data.url}/${item.url}`}>{item.label}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </aside>
        <main className="border">{children}</main>
      </div>
      </div>
    </section>
  );
}

