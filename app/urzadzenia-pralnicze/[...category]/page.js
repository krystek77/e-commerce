import React from 'react';
import { PageDescription, ProductList } from '@components';
import PropTypes from 'prop-types';

const Page = (params) => {
  return (
    <>
      <PageDescription title="Pralnice przemysłowe" />
      <section className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-320/fr auto-rows-auto gap-8 py-4">
          <ProductList />
        </div>
      </section>
    </>
  );
};

Page.propTypes = {};

export default Page;
