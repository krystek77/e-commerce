import React from 'react'
import PropTypes from 'prop-types'
import { PageDescription,Categories,ProductList } from '@components';
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


const Workshop = props => {
  const data = getData("warsztat")[0];
  return (
    <>
    <PageDescription title="Przemysłowe urządzenia pralnicze" />
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-320/fr auto-rows-auto gap-8">
          <Categories data={data} />
          <ProductList />
        </div>
      </div>
    </section>
  </>

  )
}

Workshop.propTypes = {}

export default Workshop