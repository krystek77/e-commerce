import PropTypes from "prop-types";
import React from "react";
import {PageDescription,Categories,ProductList,SortForm} from '@components';
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
      <PageDescription title="Przemysłowe urządzenia pralnicze"/>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-320/fr auto-rows-auto gap-8">
            <Categories data={data} />
            <ProductList />
          </div>
        </div>
      </section>
    </>
  );
};

Equipment.propTypes = {};

export default Equipment;
