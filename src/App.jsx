import { useReducer, useState } from "react"
import TaskComponent from "./Task/TaskComponent"
import { initialTasks } from "./data/initialTasks";
import { TaskContext } from "./context";
import TaskReducer from "./Reducer/TaskReducer";


function App() {
  // const [tasks, setTasks] = useState(initialTasks());
  const [taskToEdit, setTaskToEdit] = useState(null);
  
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks());
  
  const ProviderValue = {
    tasks: tasks,
    dispatch: dispatch,
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





 