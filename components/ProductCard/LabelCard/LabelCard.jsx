const LabelCard = ({ text }) => {
  let bg = "bg-gold";
  switch (text) {
    case "polecamy": bg = "bg-accent"; break;
    case "nowość": bg = "bg-green"; break;
    default: bg = "bg-gold"; break;
  }
  return <div className={`${bg} mr-1 mb-px uppercase text-xs font-medium font-inter px-2 py-1 rounded-sm`}>{text}</div>;
};

export default LabelCard;
