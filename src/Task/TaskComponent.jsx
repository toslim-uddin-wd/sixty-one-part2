
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"


function TaskComponent() {
  return (
    <div className=" max-w-6xl mx-auto py-3 grid grid-cols-12 gap-4">
        <TaskForm />
        <TaskList />
    </div>
  )
}

export default TaskComponent