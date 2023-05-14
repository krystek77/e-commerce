
import {FaRegHeart,FaHeart} from 'react-icons/fa';
import PropTypes from 'prop-types';

const LikeButton = ({isFavorite,handleFavorite}) => {
    
    return (
      <button
        title={isFavorite ? "usuń z ulubionych" : "dodaj do ulubionych"}
        onClick={handleFavorite}
        className={
          isFavorite
            ? "absolute top-full right-0 p-2 mt-2 rounded-full border border-black-light hover:bg-gradient-radial-hover-primary hover:border-primary-light"
            : "absolute top-full right-0 p-2 mt-2 rounded-full border border-black-light hover:bg-gradient-radial-hover-black"
        }
        type='button'>
        {isFavorite ? (
          <FaHeart className='w-5 h-5 text-primary' />
        ) : (
          <FaRegHeart className='w-5 h-5 text-black-light' />
        )}
      </button>
    );
}
LikeButton.propTypes = {
  isFavorite: PropTypes.bool,
  handleFavorite: PropTypes.func,
};
export default LikeButton;