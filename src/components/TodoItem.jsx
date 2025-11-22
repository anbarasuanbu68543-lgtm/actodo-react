import React from "react";

const TodoItem = (props) => {
  const activityarr = props.activityarr;
  const setactivityarr = props.setactivityarr;

  function deleteItem(deleteId) {
    const temparr = activityarr.filter((item) => item.id !== deleteId);
    setactivityarr(temparr);
  }

  return (
    <div className="flex justify-between">
      <p>
        {props.index + 1}. {props.item.activity}
      </p>
      <button
        className="text-red-500"
        onClick={() => deleteItem(props.item.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
