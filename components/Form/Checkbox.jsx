import PropTypes from 'prop-types';
const Checkbox = ({color,label="",children=null}) => {
  let ver = ""
  switch (color) {
    case "primary": ver=`border-primary  before:bg-primary `; break;
    case "black": ver=`border-black before:bg-black `; break;
    case "gold": ver=`border-gold before:bg-gold `; break;
    case "green": ver=`border-green before:bg-green `; break;
    default: ver = `border-accent before:bg-accent `; break;
  }
  return (
    <label className='relative flex justify-start items-center mb-4'>
      <input className={`appearance-none ${ver} m-0 flex-shrink-0 bg-white w-6 h-6 border-2 rounded-sm outline-none grid place-content-center before:scale-0 before:transition-transform before:duration-150 before:ease-in-out before: content-[""] before:w-3 before:h-3 before:clip-checkbox checked:before:scale-100 focus: outline-2 focus: outline focus: outline-offset-1 focus:outline-black disabled:cursor-not-allowed disabled:before:bg-black-light disabled:border-black-light disabled:shadow-[inset_0px_0px_4px_rgba(221,224,238,0.75)] `} type='checkbox' />
      <div className='ml-4 text-sm'>{label ? label : children}</div>
    </label>
  );
}
Checkbox.propTypes = {
  color:PropTypes.oneOf(["primary","accent","gold","black","green"]),
  label:PropTypes.string,
  children:PropTypes.element
}
export default Checkbox
