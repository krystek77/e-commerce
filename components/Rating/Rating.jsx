import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
const Rating = () => {
  return (
    <div className='flex justify-center items-start'>
      <b className='font-bold mr-1'>4,8</b>
      <div className='flex flex-col items-end'>
        <div className='flex'>
          {Array.from({ length: 5 }).map((_, index) => (
            <AiFillStar key={index} className="text-gold w-3 h-3" />
          ))}
        </div>
        <span className='text-xs'>38 ocen</span>
      </div>
    </div>
  );
};
export default Rating;
