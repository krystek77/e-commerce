import React from 'react'
import PropTypes from 'prop-types'
import {images} from '@public/assets/images'
import Image from 'next/image';

const BannerShowcase = props => {
  return (
    <main className="bg-slate-50 p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-between">
          <div className="md:flex justify-between items-stretch mb-5">
            <div className="border mb-5 md:mr-5 md:mb-0">
              <Image src={images.DEFAULT_BANNER_630_630_WEBP} alt="" />
            </div>
            <div className="flex flex-col justify-between">
              <div className="border mb-5 md:mb-0">
                <Image src={images.DEFAULT_BANNER_630_400_WEBP} alt="" />
              </div>
              <div className="border">
                <Image src={images.DEFAULT_BANNER_630_210_WEBP} alt="" />
              </div>
            </div>
          </div>
          <div className="w-full h-[210px] border">
          <Image src={images.DEFAULT_BANNER_1280_210_WEBP} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}

BannerShowcase.propTypes = {}

export default BannerShowcase