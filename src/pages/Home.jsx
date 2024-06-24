import React from "react";
import AddTask from "../components/organisms/AddTask";
import TaskList from "../components/organisms/TaskList";
const Home = () => {
  return (
    <div className="tasks-container">
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Home;
