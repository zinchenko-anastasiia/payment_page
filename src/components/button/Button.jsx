import React from "react";
import classNames from "classnames";

const Button = ({
  label = "Pay",
  onClick,
  variant = "primary",
  isLoading = false,
  icon = null
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", {
        "button--primary": variant === "primary",
        "button--dark": variant === "dark",
        "button--loading": isLoading
      })}
      disabled={isLoading}
    >
      {variant === "dark" && icon && (
        <span className="button__icon">{icon}</span>
      )}
      {isLoading && <span className="spinner"></span>}
      <span className="button__text">
        {isLoading ? "Processing..." : label}
      </span>
    </button>
  );
};

export default Button;
