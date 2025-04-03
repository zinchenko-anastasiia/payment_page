import { useState } from "react";
import InputField from "../inputField";
import Divider from "../divider";
import Button from "../button";

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

  const validateField = (name, value) => {
    let errorMessage = "";

    if (name === "cardNumber") {
      const cleanedValue = value.replace(/\D/g, "");
      if (!/^\d{16}$/.test(cleanedValue)) {
        errorMessage = "Invalid card number (16 digits)";
      }
    }

    if (name === "expirationDate") {
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
        errorMessage = "Невірний формат (MM/YY)";
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
  };

  const handleChange = (name, e) => {
    let { value } = e.target;

    if (name === "cardNumber") {
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    }

    if (name === "expirationDate") {
      value = value.replace(/\D/g, "");
      if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4);
      }
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(formData).forEach((field) =>
      validateField(field, formData[field])
    );

    if (Object.values(errors).every((error) => error === "")) {
      console.log("Оплата пройшла успішно!", formData);
    }
  };

  console.log(formData, "formData");

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <Divider text="or pay with card" />
      <div className="payment-inputs">
        <InputField
          type="tel"
          inputmode="numeric"
          label="Card number"
          placeholder="1234 1234 1234 1234"
          value={formData.cardNumber}
          onChange={(e) => handleChange("cardNumber", e)}
          onBlur={(e) => validateField("cardNumber", e.target.value)}
          error={errors.cardNumber}
          maxlength="19"
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
            maxlength="5"
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
            maxlength="3"
            autoComplete="off"
          />
        </div>
      </div>
      <Button label="Pay 299.99 UAH" type="submit" />
    </form>
  );
};

export default PaymentForm;
