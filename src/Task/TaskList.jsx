import { useContext } from "react"
import TaskItem from "./TaskItem"
import TaskListHeader from "./TaskListHeader"
import { TaskContext } from "../context";


function TaskList() {

  const {tasks} = useContext(TaskContext);
  
  
  return (
    <div className="col-span-8 bg-slate-200 p-3 rounded shadow-sm">
         
         <TaskListHeader  />

        <ul>

            {tasks.map(task => (
                <TaskItem
                 key={task} 
                 task={task}
                 />

            ))}
        </ul>
    </div>
  )
}

export default TaskList