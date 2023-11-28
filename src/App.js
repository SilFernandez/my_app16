import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  
  const tareasGuardadas = JSON.parse(localStorage.getItem('tareasGuardadas')) || [];
  const [tareas, setTareas] = useState(tareasGuardadas);

  useEffect(() => {
    
    localStorage.setItem('tareasGuardadas', JSON.stringify(tareas));
    console.log('La lista de tareas ha sido actualizada:', tareas);
  }, [tareas]);

  const handleCompleteTask = (tareaId) => {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === tareaId ? { ...tarea, completed: !tarea.completed } : tarea
      )
    );
  };

  const handleDeleteTask = (tareaId) => {
    setTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== tareaId));
  };

  const handleAddTask = (tareaNombre) => {
    const newTarea = {
      id: tareas.length + 1,
      name: tareaNombre,
      completed: false,
    };
    setTareas((prevTareas) => [...prevTareas, newTarea]);
  };

  return (
    <div className="app">
      <h1 className="mb-4">Lista de Tareas</h1>
      <TaskList
        tasks={tareas}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default App;

// Componente principal: maneja el estado de las tareas, actualiza el almacenamiento local para persistencia, pasa funciones de manipulación de tareas a componentes secundarios para gestionar la lógica específica de la interfaz de usuario.
