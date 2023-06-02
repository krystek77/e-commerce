import PropTypes from 'prop-types';

const Button = ({color="primary",type = "submit",label=""}) => {
  let ver = ""
  switch (color) {
    case "black": ver=`border-black bg-black-medium hover:bg-black-light text-white hover:text-black`; break;
    case "gold": ver=`border-gold-dark bg-gold hover:bg-gold-light`; break;
    case "green": ver=`border-green bg-green-medium hover:bg-green-light text-green-light hover:text-green`; break;
    case "accent": ver=`border-accent-dark bg-accent hover:bg-accent-light`; break;
    default: ver = `border-primary-dark bg-primary text-white hover:bg-primary-light`; break;
  }
  return (
    <button 
    type={type} 
    className={`border ${ver} rounded-full py-2 pl-6 pr-8 w-full font-extrabold font-accent text-2xl mb-4 transition-element`}>
      {label}
    </button>
  );
};

Button.propTypes = {
    type:PropTypes.oneOf(["submit","reset","button"]),
    type:PropTypes.string,
    color:PropTypes.oneOf(["primary,black,gold,green,accent"])
};

export default Button;
