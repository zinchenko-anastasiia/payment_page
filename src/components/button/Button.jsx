import React from "react";
import classNames from "classnames";

const Button = ({
  label,
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
        "button--loading": isLoading && variant === "primary"
      })}
      disabled={isLoading}
    >
      {variant === "dark" && icon && (
        <span className="button__icon">{icon}</span>
      )}
      {isLoading ? <span className="spinner"></span> : label}
    </button>
  );
};

export default Button;
