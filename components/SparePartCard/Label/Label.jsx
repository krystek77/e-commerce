const Label = ({ text }) => {
  let classes = "bg-gold";
  switch (text) {
    case "polecamy": classes = "bg-accent"; break;
    case "nowość": classes = "bg-primary text-white"; break;
    default: classes = "bg-gold"; break;
  }
  return <div className={`${classes} mr-1 mb-px uppercase text-xs font-medium font-inter px-2 py-1 rounded-sm`}>{text}</div>;
};

export default Label;
