import PropTypes from 'prop-types';
const Button = ({ type, children, label,direction }) => {
  let dir = ""
  switch (direction) {
    case "right": dir = "flex-row-reverse"; break;
    case "up": dir = "flex-col"; break;
    case "down": dir = "flex-col-reverse"; break;
    default: dir ="flex-row"; break;
  }
  return (
    <button
      className={`flex flex-center ${dir} text-white text-sm font-normal bg-black px-4 py-2 rounded-full border border-black hover:text-black hover:bg-white hover:shadow-sm transition-colors duration-150`}
      type={type}>
      {children ? (
        <span className={direction === "right" ? "ml-1" : dir === "up" ? "mb-1" : dir === "down" ? "mt-1" : "mr-1"}>
          {children}
        </span>
      ) : null}
      <span>{label}</span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button","submit","reset"]),
  chldren: PropTypes.elementType,
  label: PropTypes.string,
  direction: PropTypes.string,
};

export default Button;
