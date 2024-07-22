import "./App.css";
import PersonClass from "../components/person/PersonClass";
import { Person } from "../components/person/PersonFunctional";

function App() {
  return (
    <div className="App">
      <h2>Estructura con funcionales</h2>
      <Person name="Fernanda" surname="Gonzalez" age="23" />
      <Person name="Alonso" surname="Ramirez" age="28" />
      <Person name="Ana" surname="Martin" age="32" />
      <h2>Estructura con class</h2>
      <PersonClass name="Lara" surname="Marin" age="23" />
      <PersonClass name="Jaime" surname="Pelayo" age="33" />
      <PersonClass name="Victor" surname="Garcia" age="42" />
    </div>
  );
}

export default App;
