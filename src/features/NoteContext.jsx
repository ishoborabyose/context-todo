import { createContext } from "react";
import { useState } from "react";

export const TodoContext = createContext([]);

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState({});

  let newTodos = [...todos];

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
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleTodoEdit = (index, newText) => {
    if (!newText.trim()) {
      return;
    }
    newTodos[index].text = newText;
    newTodos[index].isEditing = false;
    setTodos(newTodos);
  };

  const handleTodoStartEdit = (index) => {
    newTodos[index].isEditing = true;
    setTodos(newTodos);
  };

  const handleTodoCancelEdit = (index) => {
    newTodos[index].isEditing = false;
    setTodos(newTodos);
  };

  const handleTodoComplete = (index) => {
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
