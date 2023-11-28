import React from 'react';

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  const handleCompleteClick = () => {
    onCompleteTask(task.id);
  };

  const handleDeleteClick = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.name}</span>
      <button onClick={handleCompleteClick} className={`btn btn-outline-success btn-sm ml-2`}>Completar</button>
      <button onClick={handleDeleteClick} className={`btn btn-outline-danger btn-sm ml-2`}>Eliminar</button>
    </div>
  );
};

export default TaskItem;

//TaskItem representa visualmente una tarea y tiene botones para completar o eliminar la tarea. Cuando se hace clic en los botones, se invocan las funciones que fueron pasadas como propiedades al componente.

