import { useState } from "react"
import TaskComponent from "./Task/TaskComponent"
import { initialTasks } from "./data/initialTasks";
import { TaskContext } from "./context";


function App() {
  const [tasks, setTasks] = useState(initialTasks());
  const [taskToEdit, setTaskToEdit] = useState();

  const ProviderValue = {
    tasks: tasks,
    setTasks: setTasks,
    taskToEdit: taskToEdit,
    setTaskToEdit: setTaskToEdit,
}

  return (
    <TaskContext.Provider value={ProviderValue}>
      <TaskComponent />
    </TaskContext.Provider>
    )
}

export default App





