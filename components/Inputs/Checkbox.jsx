
const Checkbox = ({color,label}) => {
  let ver = ""
  switch (color) {
    case "primary": ver=`border-primary shadow-[inset_0px_0px_4px_rgba(220,38,38,0.75)] before:bg-primary checked:shadow-[inset_0px_0px_6px_rgba(220,38,38,0.75)]`; break;
    case "black": ver=`border-black shadow-[inset_0px_0px_4px_rgba(114,117,129,0.75)] before:bg-black checked:shadow-[inset_0px_0px_6px_rgba(114,117,129,0.75)]`; break;
    case "gold": ver=`border-gold shadow-[inset_0px_0px_4px_rgba(255,156,0,0.75)] before:bg-gold checked:shadow-[inset_0px_0px_6px_rgba(255,156,0,0.75)]`; break;
    case "green": ver=`border-green shadow-[inset_0px_0px_4px_rgba(77,139,49,0.75)] before:bg-green checked:shadow-[inset_0px_0px_6px_rgba(77,139,49,0.75)]`; break;
    default: ver = `border-accent shadow-[inset_0px_0px_4px_rgba(103,232,249,0.75)] before:bg-accent checked:shadow-[inset_0px_0px_6px_rgba(103,232,249,0.75)]`; break;
  }
  return (
    <label className='relative flex justify-start items-center'>
      <input className={`appearance-none ${ver} m-0 bg-white w-6 h-6 border-2 rounded-sm outline-none grid place-content-center before:scale-0 before:transition-transform before:duration-150 before:ease-in-out before: content-[""] before:w-3 before:h-3 before:clip-checkbox checked:before:scale-100 focus: outline-2 focus: outline focus: outline-offset-1 focus:outline-black disabled:cursor-not-allowed disabled:before:bg-black-light disabled:border-black-light disabled:shadow-[inset_0px_0px_4px_rgba(221,224,238,0.75)] `} type='checkbox' />
      <span className='ml-2 text-sm'>{label}</span>
    </label>
  );
}
export default Checkbox
