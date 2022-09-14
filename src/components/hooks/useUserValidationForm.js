import { useEffect } from "react";

export const useUserValidationForm = (
  formFields,
  errorLabels,
  setErrorLabels
) => {
  useEffect(() => {
    if (/[0-9]/.test(formFields.lastname)) {
      setErrorLabels({
        ...errorLabels,
        lastname: {
          message: "This field can't contains number",
          isValid: false
        }
      });
    } else {
      setErrorLabels({
        ...errorLabels,
        lastname: {
          message: "",
          isValid: true
        }
      });
    }
  }, [errorLabels, formFields.lastname, setErrorLabels]);

  useEffect(() => {
    if (/[0-9]/g.test(formFields.firstname)) {
      setErrorLabels({
        ...errorLabels,
        firstname: {
          message: "This field can't contains number",
          isValid: false
        }
      });
    } else {
      setErrorLabels({
        ...errorLabels,
        firstname: {
          message: "",
          isValid: true
        }
      });
    }
  }, [errorLabels, formFields.firstname, setErrorLabels]);
};
