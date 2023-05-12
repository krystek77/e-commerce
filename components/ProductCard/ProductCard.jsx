import {images} from '@public/assets/images';
import Image from 'next/image';

const ProductCard = () => {
  return (
    <div>
        <Image src={images.DEFAULT_PORTRAIT} alt="Część zamienna do przemysłowych urządzeń pralniczych" placeholder='blur-up'/>
    </div>
  )
}

export default ProductCard