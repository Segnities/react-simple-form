import { useState } from "react";
import "./styles.css";
import Button from "./components/UI/Buttons/Button";
import { useUserValidationForm } from "./components/hooks/useUserValidationForm";
import FormInput from "./components/UI/Inputs/FormInput";

function App() {
  const [formFields, setFormFields] = useState({
    firstname: "",
    lastname: "",
    email: ""
  });

  const [errorLabels, setErrorLabels] = useState({
    firstname: {
      message: "",
      isValid: false
    },
    lastname: {
      message: "",
      isValid: false
    },
    email: {
      message: "",
      isValid: false
    }
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChangeFirstname = (e) => {
    setFormFields({ ...formFields, firstname: e.target.value });
  };

  const handleChangeLastname = (e) => {
    setFormFields({ ...formFields, lastname: e.target.value });
  };

  const handleChangeEmail = (e) => {
    setFormFields({ ...formFields, email: e.target.value });
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formFields.email)) {
      setErrorLabels({
        ...errorLabels,
        email: {
          message: "",
          isValid: true
        }
      });
    } else {
      setErrorLabels({
        ...errorLabels,
        email: {
          message: "Invalid email. Example: email@email.com",
          isValid: true
        }
      });
    }
  };

  const handleClick = () => {
    if (
      errorLabels.firstname.isValid &&
      errorLabels.lastname.isValid &&
      errorLabels.email.isValid
    ) {
      setSubmitted(true);
    }
  };

  useUserValidationForm(formFields, errorLabels, setErrorLabels);

  return (
    <div className="App">
      <div className="form-container">
        {submitted === true ? (
          <div className="message success-message">
            Success! Thank you for registration on our resource!
          </div>
        ) : null}
        <form className="form form-group" onSubmit={(e) => e.preventDefault()}>
          <FormInput
            id="f-name"
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={formFields.firstname}
            onChange={handleChangeFirstname}
          />
          <span className="danger-input-message">
            {errorLabels.firstname.message}
          </span>
          <FormInput
            id="l-name"
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={formFields.lastname}
            onChange={handleChangeLastname}
          />
          <span className="danger-input-message">
            {errorLabels.lastname.message}
          </span>
          <FormInput
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formFields.email}
            onChange={handleChangeEmail}
          />
          <span className="danger-input-message">
            {errorLabels.email.message}
          </span>
          <Button
            type="submit"
            additionalClassNames={["my-3"]}
            onClick={handleClick}
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
