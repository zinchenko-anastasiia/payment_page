const Snackbar = ({ message, isVisible }) => {
  return (
    isVisible && (
      <div className="snackbar">
        <p>{message}</p>
      </div>
    )
  );
};

export default Snackbar;
