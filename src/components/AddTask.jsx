import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [detail, setDetail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTask({ text, day, detail, isDone: false });
    setText("");
    setDay("");
    setDetail("");
    // console.log(text);
    // console.log(day);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          type="text"
          placeholder="AddTask"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          //   onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          id="day"
          name="day"
          type="text"
          placeholder="Add Day & Time"
          required
          value={day}
          onChange={(e) => setDay(e.target.value)}
          //   onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="detail">Details</label>
        <input
          id="detail"
          name="detail"
          type="text"
          placeholder="Add Details"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          //   onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <input type="submit" value="Add Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;