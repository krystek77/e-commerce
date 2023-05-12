

const Button = ({type,children,label}) => {
  return (
    <button type={type}>
      <span>{children}</span>
      <span>{label}</span>
    </button>
  );
}

export default Button;