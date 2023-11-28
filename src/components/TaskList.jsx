import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;

//TaskList se encarga de renderizar una lista de tareas, delegando la representación visual de cada tarea al componente TaskItem. Pasa funciones específicas (onCompleteTask y onDeleteTask) a cada instancia de TaskItem para manejar los eventos relacionados con las tareas.