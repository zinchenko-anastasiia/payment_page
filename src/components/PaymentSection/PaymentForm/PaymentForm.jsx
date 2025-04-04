import React, { useState } from "react";
import Divider from "../../Divider";
import InputField from "../../InputField";
import Button from "../../Button";
import Snackbar from "../../Snackbar";
import useValidateField from "./hooks/useValidateField";
import useSubmit from "./hooks/useSubmit";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvc: ""
  });
  const [errors, setErrors] = useState({
    cardNumber: "",
    expirationDate: "",
    cvc: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const validateField = useValidateField(setErrors);
  const handleSubmit = useSubmit(
    formData,
    validateField,
    errors,
    setIsSubmitting,
    setSnackbarVisible
  );

  const handleChange = (name, e) => {
    let { value } = e.target;

    if (name === "cardNumber") {
      value = value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
    }

    if (name === "expirationDate") {
      value = value.replace(/\D/g, "");
      if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4);
      }
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <form className="payment-form" onSubmit={handleSubmit} autoComplete="off">
        <Divider text="or pay with card" />
        <div className="payment-inputs">
          <InputField
            type="tel"
            inputMode="numeric"
            label="Card number"
            placeholder="1234 1234 1234 1234"
            value={formData.cardNumber}
            onChange={(e) => handleChange("cardNumber", e)}
            onBlur={(e) => validateField("cardNumber", e.target.value)}
            error={errors.cardNumber}
            maxLength="19"
            autoComplete="off"
          />
          <div className="payment-input-group">
            <InputField
              type="text"
              label="Expiration Date"
              placeholder="MM/YY"
              value={formData.expirationDate}
              onChange={(e) => handleChange("expirationDate", e)}
              onBlur={(e) => validateField("expirationDate", e.target.value)}
              error={errors.expirationDate}
              maxLength="5"
              autoComplete="off"
            />
            <InputField
              type="text"
              label="CVC"
              placeholder="•••"
              value={formData.cvc}
              onChange={(e) => handleChange("cvc", e)}
              onBlur={(e) => validateField("cvc", e.target.value)}
              error={errors.cvc}
              maxLength="3"
              autoComplete="off"
            />
          </div>
        </div>
        <Button label="Pay 299.99 UAH" type="submit" isLoading={isSubmitting} />
      </form>
      <Snackbar message="Payment is successful!" isVisible={snackbarVisible} />
    </div>
  );
};

export default PaymentForm;
