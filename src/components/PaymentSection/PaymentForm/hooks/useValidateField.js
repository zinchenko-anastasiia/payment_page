import { useCallback } from "react";

const useValidateField = (setErrors) => {
  return useCallback(
    (name, value) => {
      let errorMessage = "";

      if (name === "cardNumber") {
        const cleanedValue = value.replace(/\D/g, "");
        if (!/^\d{16}$/.test(cleanedValue)) {
          errorMessage = "Invalid card number (16 digits)";
        }
      }

      if (name === "expirationDate") {
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
          errorMessage = "Invalid format (MM/YY)";
        } else {
          const [month, year] = value.split("/");
          const currentDate = new Date();
          const currentMonth = currentDate.getMonth() + 1;
          const currentYear = currentDate.getFullYear() % 100;

          if (
            parseInt(year) < currentYear ||
            (parseInt(year) === currentYear && parseInt(month) < currentMonth)
          ) {
            errorMessage = "The card has expired";
          }
        }
      }

      if (name === "cvc") {
        if (!/^\d{3}$/.test(value)) {
          errorMessage = "CVC must contain 3 digits";
        }
      }

      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage
      }));
    },
    [setErrors]
  );
};

export default useValidateField;
