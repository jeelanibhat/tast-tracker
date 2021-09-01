const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="tasks-container">
      <cite>
        Total Tasks: <b>{tasks.length}</b>
      </cite>
      {tasks.map((task) => (
        <div key={task.id}>
          <div
            className={task.reminder ? "left-green-border" : ""}
            onDoubleClick={() => onToggle(task.id)}
          >
            <div className="w-90">
              <h5>{task.text}</h5>
              <p className="mb-0">{task.day}</p>
            </div>
            <img
              src="./images/close.png"
              alt=""
              className="cursor"
              onClick={() => onDelete(task.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
