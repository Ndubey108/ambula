import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
//Adding the task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), task: newTask, completed: false }]);
      setNewTask('');
    }
  };
//toggling checkbox for task completion
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
//removed the task
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className='todo'>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button id='btn'onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className='List'>
            <input id='chkbox'
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.task}
            </span>
            <button id='remove'onClick={() => removeTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {
        tasks.length===0 &&(<><h5 style={{color:'grey',fontStyle:'italic'}}>List is Empty.</h5></>)
      }
      <div className='bottom'>
      <p>Total tasks: {tasks.length}</p>
      <p>Completed tasks: {tasks.filter((task) => task.completed).length}</p>
      </div>
    </div>
  );
};

export default TodoList;
