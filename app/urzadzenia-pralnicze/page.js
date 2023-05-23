import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import {PageDescription} from '@components';
import data from "@utils/data";

function getData(slug) {
  try {
    //fetch data
    const response = data.filter((item) => item.url === slug);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

const Equipment = (params) => {
  const data = getData("urzadzenia-pralnicze")[0];
  console.log(params)
  return (
    <>
      <PageDescription />
      <section>
        <div className="container mx-auto">
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
                    <li
                      className="py-2 border-b border-black-light"
                      key={item._id}
                    >
                      <Link href={`${data.url}/${item.url}`}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </aside>
            <main className="border">Filtered</main>
          </div>
        </div>
      </section>
    </>
  );
};

Equipment.propTypes = {};

export default Equipment;
