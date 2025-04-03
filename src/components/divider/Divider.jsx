const Divider = ({ text = null }) => {
  return text ? (
    <div className="divider">
      <span className="divider-text">{text}</span>
    </div>
  ) : (
    <div className="divider-line"></div>
  );
};

export default Divider;
