import { useCallback, useMemo } from "react";

const useSubmit = (
  formData,
  validateField,
  errors,
  setIsSubmitting,
  setSnackbarVisible,
  setFormData
) => {
  const isValidForm = useMemo(
    () =>
      Object.values(errors).every((error) => error === "") &&
      Object.values(formData).every((value) => value.trim() !== ""),
    [errors, formData]
  );

  return useCallback(
    (e) => {
      e.preventDefault();

      Object.keys(formData).forEach((field) =>
        validateField(field, formData[field])
      );

      if (isValidForm) {
        setIsSubmitting(true);

        setTimeout(() => {
          setIsSubmitting(false);
          setSnackbarVisible(true);
          setTimeout(() => setSnackbarVisible(false), 3000);
          setFormData({
            cardNumber: "",
            expirationDate: "",
            cvc: ""
          });
        }, 2000);
      }
    },
    [
      formData,
      isValidForm,
      setFormData,
      setIsSubmitting,
      setSnackbarVisible,
      validateField
    ]
  );
};

export default useSubmit;
