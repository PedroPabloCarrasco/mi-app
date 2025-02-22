import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <>
    <h1>React + Typescript</h1>
    <hr/>
    <h2>UseState</h2>
    <Counter />

    <Usuario />

    <h2>UseEffect - useRef</h2>
    <hr />

    <TimerPadre />
    </>
  
  );
}

export default App;
