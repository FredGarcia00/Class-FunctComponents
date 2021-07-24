import React, { useState } from "react";

function Form() {
  const [fname, setFname] = useState("");
  const [showError, setShowError] = useState(false);
  const formSubmitted = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  const handleChange = (e) => {
    //   console.log(e.target.value);
    setFname(e.target.value);
  };
  const checkString = () => {
    if (fname.length < 5) {
      setShowError(true);
    }
  };
  return (
    <form onSubmit={formSubmitted}>
      <label htmlFor="fname">Full Name</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={fname}
        onChange={handleChange}
        onFocus={() => setShowError(false)}
        onBlur={() => checkString()}
      />
      <div className={`error ${showError ? "show" : ""}`}>
        Please put your full name
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;
