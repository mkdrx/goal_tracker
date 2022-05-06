import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    // Communicates upwards with CourseGoalList component
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {/* Lists children of props, in this case the children from CourseGoalList component */}
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
