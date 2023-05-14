const SpecialOffer = () => {
    return (
      <div className=''>
        <div className="flex flex-start items-center">
          <del className='font-inter text-md font-normal mb-1 text-black mr-2'>
            798,<span className='text-sm'>53 zł</span>
          </del>
          <div className="px-2 py-1 bg-primary-light text-white text-xs font-medium rounded-full">-10%</div>
        </div>
        <p className='text-xs'>najniższa cena z ostatnich 30 dni przed obniżką</p>
      </div>
    );
}
export default SpecialOffer