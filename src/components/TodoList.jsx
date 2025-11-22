import TodoItem from "./TodoItem"

function TodoList(props) {
  const activityarr = props.activityarr
  const setactivityarr = props.setactivityarr

  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h1>Today's Activity</h1>

      {activityarr.length === 0 && (
        <p>You haven't added anything yet</p>
      )}

      {activityarr.map((item, index) => (
        <TodoItem
          key={item.id}
          item={item}
          index={index}
          activityarr={activityarr}
          setactivityarr={setactivityarr}
        />
      ))}
    </div>
  )
}

export default TodoList
