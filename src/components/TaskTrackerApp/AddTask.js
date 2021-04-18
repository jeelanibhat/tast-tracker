import { useState } from "react";

const AddTask = ({ saveTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter your task!");
      return;
    }
    saveTask({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <div className="add-task-container px-4 mb-5">
      <form onSubmit={onSubmit}>
        <div className="task-name">
          <label>Add Task</label>
          <input
            type="text"
            className="form-control"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="task-name">
          <label>Add Day & Time</label>
          <input
            type="text"
            className="form-control"
            placeholder="Add Day & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="task-name d-flex align-items-center">
          <label className="w-50 mb-0">Set Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <div className="task-name">
          <input
            type="submit"
            className="btn btn-dark w-100"
            value="Save Task"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
