import { MdAddCircle } from "react-icons/md";
import { TodoContext } from "../features/NoteContext";
import { useContext } from "react";

const Form = () => {
  const { newTodo, handleNewTodoAdd, handleNewTodoChange } =
    useContext(TodoContext);
  return (
    <div className="max-w-3xl mx-auto py-11 px-4">
      <h1 className="text-[#ececec] my-9 text-9xl font-normal text-center">
        Todos
      </h1>

      <form
        onSubmit={handleNewTodoAdd}
        className="flex rounded-full justify-between shadow-box"
      >
        <input
          autoFocus
          value={newTodo}
          onChange={handleNewTodoChange}
          type="text"
          className="bg-white w-full px-4 py-5 rounded-full outline-none placeholder:text-base placeholder:text-gray-700"
          placeholder="Add todo..."
        />
        <button className="cursor-pointer pr-5">
          <MdAddCircle className="w-7 h-10 text-[#ff4d4d]" />
        </button>
      </form>
    </div>
  );
};

export default Form;
