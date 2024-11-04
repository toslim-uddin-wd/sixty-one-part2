import { useContext, useEffect, useState } from "react"
import { TaskContext } from "../context";


function TaskForm() {

    const {tasks, dispatch, taskToEdit, setTaskToEdit} =useContext(TaskContext);

    const [text, setText] = useState();

    useEffect(() => {
        if(taskToEdit) {
            setText(taskToEdit.text)
        }
         
    }, [taskToEdit])


    const handClick = () => {
        if(taskToEdit) {
            // Updating;
            dispatch({
              type: 'UPDATE_TASK',
              payload: {
                ...taskToEdit,
                text: text,
              },
            })

            // setTasks(tasks.map(task => {
            //     if(task.id === taskToEdit.id) {
            //       return {
            //         ...taskToEdit,
            //         text: text,
            //       }
            //     } else {
            //       return task;
            //     }
            //   }))
          
              setTaskToEdit(null);
        } else {
          dispatch({
                type: 'ADD_TASK',
                payload: {
                  id: crypto.randomUUID(),
                  text: text,
                }

              })
        }
        setText('');
    }

    const handleChange = (e) => {
        setText(e.target.value)

    }

  return (
    <div className=" col-span-4 bg-slate-200 p-3 rounded shadow-sm">
        <h2 className="text-2xl mb-3 text-bold">Task Form</h2>
        <input value={text} onChange={handleChange} className="border p-2 w-full mb-3" type="text" />
        <button onClick={handClick} className="py-2 px-4 bg-green-600 text-white">{taskToEdit ? 'Edit Task' : 'Add Task'}</button>
    </div>
  )
}

export default TaskForm