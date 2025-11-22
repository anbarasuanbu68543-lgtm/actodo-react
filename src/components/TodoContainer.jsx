
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function TodoContainer()
{

  const[activityarr,setactivityarr]=useState([
        {
            id:1,
            activity:"go for walk"
        },
          {
            id:2,
            activity:"go for run"
        },
          {
            id:3,
            activity:"go for study"
        },
    ])
  return(
    <div>
      <div className="flex gap-5 flex-wrap">
        <TodoForm activityarr={activityarr} setactivityarr={setactivityarr}/>
        <TodoList activityarr={activityarr} setactivityarr={setactivityarr}/>
      </div>
    </div>
  )
}
export default TodoContainer