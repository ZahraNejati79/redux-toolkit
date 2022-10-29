import "./App.css";
import { Provider } from "react-redux";
import { store } from "./features/Store";
function App() {
  return (
    <Provider store={store}>
      <div className="App"> hello world</div>
    </Provider>
  );
}

export default App;
