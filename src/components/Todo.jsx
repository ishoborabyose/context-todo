import { TodoContext } from "../features/NoteContext";
import { useContext } from "react";
import { MdDelete, MdEdit, MdSave, MdCancel } from "react-icons/md";

const Todo = () => {
  const {
    todos,
    handleTodoDelete,
    handleTodoEdit,
    handleTodoStartEdit,
    handleTodoCancelEdit,
    handleTodoComplete,
  } = useContext(TodoContext);
  return (
    <div className="max-w-3xl mx-auto py-11 px-4">
      {todos.map((todo, index) => {
        return (
          <div className="pt-8 border-b-2">
            {todo.isEditing ? (
              <div className="flex text-center">
                <input
                  className="bg-white w-full px-4 py-5 rounded-full outline-none placeholder:text-base placeholder:text-gray-800"
                  type="text"
                  defaultValue={todo.text}
                  autoFocus
                  onBlur={(e) => handleTodoEdit(index, e.target.value)}
                  onKeyDown={(e) => {
                    e.key === "Escape" ? handleTodoCancelEdit(index) : "";
                  }}
                />
                <button
                  className="cursor-pointer"
                  onClick={() => handleTodoEdit(index)}
                >
                  <MdSave className="w-7 h-10 text-[#61c7c6]" />
                </button>
                <button
                  className="ml-2 cursor-pointer"
                  onClick={() => handleTodoCancelEdit(index)}
                >
                  <MdCancel className="ml-2 h-10 w-7 text-[#ff4d4d]" />
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={todo.completed}
                  onClick={() => handleTodoComplete(index)}
                />
                <p
                  style={{
                    textDecoration: todo.completed ? "line-through" : "",
                  }}
                  className={`flex-1 ml-2 `}
                >
                  {todo.text}
                </p>
                <div>
                  <button onClick={() => handleTodoStartEdit(index)}>
                    <MdEdit className="text-[#61c7c6] w-7 h-10" />
                  </button>
                  <button onClick={() => handleTodoDelete(index)}>
                    <MdDelete className="text-[#ff4d4d] w-7 h-10" />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
