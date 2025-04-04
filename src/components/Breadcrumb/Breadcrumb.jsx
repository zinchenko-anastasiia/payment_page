import ArrowBack from "./../../assets/Arrow.svg";

const Breadcrumb = ({ text }) => {
  return (
    <div className="breadcrumbs">
      <img src={ArrowBack} alt="Arrow back" />
      <p className="breadcrumbs-text">{text}</p>
    </div>
  );
};

export default Breadcrumb;
