import React from 'react';
import { PageDescription, ProductList } from '@components';
import PropTypes from 'prop-types';

const Page = (params) => {
  return (
    <>
      <PageDescription title="Małe profesjonalne pralnicowirówki" />
      <section className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-320/fr auto-rows-auto gap-8 py-4">
        <div></div>
          <ProductList />
        </div>
      </section>
      <section className='container mx-auto'>
        <div>Opis małych profesjonalnych pralnicowirówek</div>
      </section>
    </>
  );
};

Page.propTypes = {};

export default Page;
