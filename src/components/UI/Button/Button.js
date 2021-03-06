import React from "react";

// The way to import if you are using CSS modules to set scope styling for the component where we use them
// The classes from css are used as properties (e.g line 41)
import styles from "./Button.module.css";

// ANOTHER WAY OF STYLING:
/* import styled from "styled-components"; // https://styled-components.com/ */

// Styled Component approach - button is a method to the styled object
// It will return a new button component with the styling set in between the back ticks

/* const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
 */

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
