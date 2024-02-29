import { Provider } from "react-redux";
import store from "./store";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="tasks-container">
          <AddTask />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
