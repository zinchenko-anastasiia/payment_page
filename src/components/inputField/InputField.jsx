const InputField = ({ label, error, ...props }) => {
  return (
    <div className="input-field">
      <label className="input-label">{label}</label>
      <input className={`input-box ${error ? "input-error" : ""}`} {...props} />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default InputField;
