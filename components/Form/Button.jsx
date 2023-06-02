import PropTypes from 'prop-types';

const Button = ({color="primary",type = "submit",label="",disabled=false}) => {
  let ver = ""
  switch (color) {
    case "black": ver=`border-black bg-black-medium hover:bg-black-light text-white hover:text-black disabled:bg-black-light disabled:border-black-medium disabled:text-white`; break;
    case "gold": ver=`border-gold-dark bg-gold hover:bg-gold-light disabled:bg-black-light disabled:border-black-medium disabled:text-white`; break;
    case "green": ver=`border-green bg-green-medium hover:bg-green-light text-green-light hover:text-green disabled:bg-black-light disabled:border-black-medium disabled:text-white`; break;
    case "accent": ver=`border-accent-dark bg-accent hover:bg-accent-light disabled:bg-black-light disabled:border-black-medium disabled:text-white`; break;
    default: ver = `border-primary-dark bg-primary text-white hover:bg-primary-light disabled:bg-black-light disabled:border-black-medium disabled:text-white`; break;
  }
  return (
    <button 
    type={type} 
    disabled={disabled}
    className={`border ${ver} rounded-full py-2 pl-6 pr-8 w-full font-extrabold font-accent text-2xl mb-4 transition-element disabled:cursor-not-allowed`}>
      {label}
    </button>
  );
};

Button.propTypes = {
    type:PropTypes.oneOf(["submit","reset","button"]),
    type:PropTypes.string,
    color:PropTypes.oneOf(["primary,black,gold,green,accent"]),
    disabled:PropTypes.bool
};

export default Button;
