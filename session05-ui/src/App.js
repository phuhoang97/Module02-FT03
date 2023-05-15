import "./App.css";
import DemoAnt from "./components/DemoAnt";
import DemoBootstrap from "./components/DemoBootstrap";
import DemoMui from "./components/DemoMui";
import DemoYup from "./components/DemoYup";

function App() {
  return (
    <div className='App'>
      <DemoBootstrap />
      <DemoAnt />
      <DemoMui />
      <DemoYup />
    </div>
  );
}

export default App;
