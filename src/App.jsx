import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Home />
      </div>
    </Provider>
  );
};

export default App;
