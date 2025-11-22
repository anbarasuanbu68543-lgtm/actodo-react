import React, { useState } from "react";
const TodoForm = (props) => {
  const activityarr = props.activityarr;
  const setactivityarr = props.setactivityarr;
  const [newactivity, setactivity] = useState("");
  function handlechange(event)
  {
    setactivity(event.target.value)
  }
  function addactivity()
  {
    setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
   
setactivity("")  }
  return (
    <div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activites</h1>
        <div>
          <input
          value={newactivity}
          onChange={handlechange}
            type="text"
            className="border border-black rounded bg-transparent p-1"
            placeholder="Next Activity?"
          ></input>
          <button onClick={addactivity} className="bg-black text-white p-1 border border-black">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
