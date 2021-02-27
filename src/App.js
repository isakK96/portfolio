import './App.css';
import Links from './components/Links.js'
import About from "./components/About.js";
import Projects from "./components/Projects.js";

function App() {
  return (
    <div className="App text-center">
      <About />
      <Links />
      <Projects />
    </div>
  );
}

export default App;
