import React, { useState } from "react";

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (validateEmail(value)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleCountryChange = (e) => {
    const value = e.target.value;
    setCountry(value);
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (validatePassword(value)) {
      setPasswordError("");
    } else {
      setPasswordError("Password must be at least 8 characters long.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have successfully signed up!");
    setEmail("");
    setName("");
    setCountry("");
    setAge("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  React.useEffect(() => {
    const isFormValid =
      emailError === "" &&
      passwordError === "" &&
      email !== "" &&
      name !== "" &&
      country !== "" &&
      age !== "" &&
      password !== "";
    setIsValid(isFormValid);
  }, [emailError, passwordError, email, name, country, age, password]);
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <span className="error">{emailError}</span>
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={handleCountryChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <span className="error">{passwordError}</span>
      </div>
      <div>
        <button type="submit" disabled={!isValid}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;


