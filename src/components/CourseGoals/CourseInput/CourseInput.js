import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  // States for entering values and checking validations

  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    // To check if the input is valid, lets the state to true - so it resets back to normal after start typing
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    // Changes the state to whatever the user did input (event.target.value)
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // To validate if entered value is valid or not, to show different styling depending on that
    // Validate if its empty, if not, it will add the entered value
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    // Sends the enteredValue upwards to App
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Adding dynamic styling through CSS modules - depending on user input and isValid state */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
