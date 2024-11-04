import { useContext } from "react"
import { TaskContext } from "../context"


function TaskListHeader() {

  const { dispatch } = useContext(TaskContext);

  return (
    <div className="flex items-center mb-4">
        <h2 className="text-2xl mb-3 text-bold">Task List</h2>
        <button onClick={() => dispatch({type: "CLEAR_TASK"})} className=" py-2 px-4 rounded shadow-sm bg-rose-600 text-white ml-auto">Delete All</button>
    </div>
  )
}

export default TaskListHeader