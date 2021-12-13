import './App.css';
import Header from './components/Header';
import React,{useState} from "react";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from "./components/Footer";

const data=[
    {
      id: 1,
      text: "Make your car insurance",
      day: "Dec 12th at 2:30pm",
      detail: "Lorem ipsum dolor sit, amet consectetur  elit.",
      isDone: false,
    },
    {
      id: 2,
      text: "Face-time your friends",
      day: "Dec 13th at 1:30pm",
      detail: "Lorem ipsum dolor sit, amet consectetur optio!",

      isDone: false,
    },
    {
      id: 3,
      text: "Sell some unwanted clothes",
      day: "Apr 22nd at 11:00pm",
      detail: "Lorem ipsum adipisicing elit. Suscipit, optio!",
      isDone: false,
    },
    {
      id: 4,
      text: "Do some exercise in forest",
      day: "May 07th at 6:00pm",
      detail: "Lorem ipsum adipisicing elit. Suscipit, optio!",
      isDone: false,
    },
  ]

function App() {
  
  const [tasks, setTasks] = useState(data);

    const [showAddTask, setShowAddTask] = useState(false);



  // ADD TASK
  const addTask = (newTask) => {
    // console.log("Add Task From App.js");
    const id = Math.floor(Math.random() * 100) + 1;
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  // DELETE TASK
  const deleteTask = (deletedTaskId) => {
    // console.log("delete", deletedTaskId);
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  //TOGGLE DONE
  const toggleDone = (toggleDoneId) => {
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // SHOW ADD TASK
  const toggleShow = () => setShowAddTask(!showAddTask);

  // DELETE ALL TASKS
  const deleteAllTask = () => {
    setTasks([]);
  };

 //UPDATE
 const updateTask=(updated)=>{

 setTasks(
      tasks.map((task) =>
        task.id === updated.todoId ? { ...task, text: updated.todoText,datail:updated.todoDetail,day:updated.todoDay } : task
      )
    );

 }
  

  // TO DO FOR YOU

   return (
    <div className="container">
      <Header
        title="TASK TRACKER"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />

      {showAddTask && <AddTask addTask={addTask} />}

      {tasks.length > 0 ? (
        <React.Fragment>
<Tasks tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} toggleDone={toggleDone} />
 <Footer deleteAllTask={deleteAllTask} />
        </React.Fragment>
        
      ) : (
        <p style={{ textAlign: "center" }}>NO TASK TO SHOW</p>
      )}
      
     
    </div>
  );
}

export default App;