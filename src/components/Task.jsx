// import React from 'react'
import { FaTimesCircle } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import React,{useState} from 'react'

const Task = ({ task, deleteTask, toggleDone,updateTask }) => {

  const [show,setShow]=useState(false);
const [todoId,setTodoId]=useState("");
const [todoText,setTodoText]=useState(task.text);
const [todoDay,setTodoDay]=useState(task.day)
const [todoDetail,setTodoDetail]=useState(task.detail);
setTodoId(task.id);

 
  const onSubmit = (e) => {
    e.preventDefault();
    updateTask({ todoId,todoText, todoDay, todoDetail, isDone: false });
    setShow(!show)
    // console.log(text);
    // console.log(day);
    
  };
  
  return (
    <div
      className={`task ${task.isDone ? "done" : ""}`}
      onDoubleClick={() => toggleDone(task.id)}
    >
      <h3>
        <span style={{ textDecoration: "underline" }}>- {task.text}</span>
        <div className="iconAttribute">
             <FaTimesCircle
          className="icon"
          style={{
            fontSize: "24px",
            color: "red",
          }}
          onClick={() => deleteTask(task.id)}
        />
        <FaPencilAlt className="icon"
          style={{
            fontSize: "24px",
            color: "black",
          }}
           onClick={()=>setShow(!show)}/>

        </div>
       
      </h3>
      <h4>- {task.day}</h4>
      <p style={{ color: "blue" }}>
        <span style={{ color: "red" }}>Note: </span> ({task.detail})
      </p>

       {
                show && (
                    <form className="add-form"  onSubmit={onSubmit}>
                        <input  className="update-input"  type="text" value={todoText} onChange={(e)=>setTodoText(e.target.value)}/>
                    
                     <input  className="update-input"
          id="day"
          name="day"
          type="text"
          placeholder="Add Day & Time"
          required
          value={todoDay}
          onChange={(e) => setTodoDay(e.target.value)}
          //   onChange={(e) => console.log(e.target.value)}
        />
                      <input className="update-input"
          id="detail"
          name="detail"
          type="text"
          placeholder="Add Details"
          value={todoDetail}
          onChange={(e) => setTodoDetail(e.target.value)}
          //   onChange={(e) => console.log(e.target.value)}
        />
                        <button className="btn btn-block" id="todo-form2-savebutton"  type="submit">Kaydet</button>
                    </form>
                )
            }
            
    </div>
  );
};

export default Task;