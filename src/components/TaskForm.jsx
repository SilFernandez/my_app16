import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [tareaNombre, setTareaNombre] = useState('');

  const handleInputChange = (e) => {
    setTareaNombre(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(tareaNombre);
    setTareaNombre('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input type="text" value={tareaNombre} onChange={handleInputChange} className="form-control mr-2" />
      <button type="submit" className="btn btn-primary mt-2">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;

//TaskForm entrega un formulario para que el usuario ingrese el nombre de una tarea. Cuando el formulario se envía, se activa una función que notifica al componente padre sobre la nueva tarea que se debe agregar, y luego reinicia el estado del campo de entrada.