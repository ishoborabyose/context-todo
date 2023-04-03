import { createContext } from "react";
import { useState } from "react";

export const TodoContext = createContext([]);

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState({});

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoAdd = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([{ text: newTodo.trim(), completed: false }, ...todos]);
      setNewTodo("");
    }
  };

  const handleTodoDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleTodoEdit = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    newTodos[index].isEditing = false;
    setTodos(newTodos);
  };

  const handleTodoStartEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index].isEditing = true;
    setTodos(newTodos);
  };

  const handleTodoCancelEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index].isEditing = false;
    setTodos(newTodos);
  };

  const handleTodoComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const value = {
    isEditing,
    setIsEditing,
    todos,
    newTodo,
    handleNewTodoChange,
    handleNewTodoAdd,
    handleTodoDelete,
    handleTodoEdit,
    handleTodoStartEdit,
    handleTodoCancelEdit,
    handleTodoComplete,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
