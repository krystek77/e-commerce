import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import { BsChevronBarLeft } from "@react-icons/all-files/bs/BsChevronBarLeft";

const Categories = ({data}) => {
  return (
    <aside className=" bg-white py-4">
      <div className="shadow-lg shadow-black border border-black-light border-b-[16px] rounded-md bg-white min-h-[360px] mb-8">
        {/** back */}
        <Link className="p-4 block bg-slate-50 hover-back group" href={data.url}>
          <div className="lowercase flex justify-between items-center">
            <span>
              <b className="mr-2">wróc do:</b>
              {data.label}
            </span>
            <BsChevronBarLeft className='group-hover:text-gold' />
          </div>
        </Link>
        {/** categories */}
        {data.categories?.length ? (
          <ul>
            {data.categories.map((item) => (
              <li className=" border-b border-black-light" key={item._id}>
                <Link className='block py-2 px-4 focus-element hover-link' href={`${data.url}/${item.url}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="shadow-lg shadow-black border border-black-light border-b-[16px] rounded-md bg-white min-h-[360px]  p-4 mb-8">
        some filters
      </div>
      <div className="shadow-lg shadow-black border border-black-light border-b-[16px] rounded-md bg-white min-h-[360px]  p-4">
        programy lojalnościowe
      </div>
    </aside>
  );
}

Categories.propTypes = {}

export default Categories