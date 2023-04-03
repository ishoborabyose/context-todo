import Form from "./components/Form";
import Todo from "./components/Todo";
import { TodoContextProvider } from "./features/NoteContext";

const App = () => {
  return (
    <TodoContextProvider>
      <Form />
      <Todo />
    </TodoContextProvider>
  );
};

export default App;
