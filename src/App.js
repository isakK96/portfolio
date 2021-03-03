import './App.css';
import Links from './components/Links.js'
import About from "./components/About.js";
import Projects from "./components/Projects.js";
//import Technologies from "./components/Technologies.js";

function App() {
  return (
    <div className="App text-center mb-8">
      <div className="bg-gradient-to-r from-bluegray-900 to-bluegray-600 pt-20">
        <About />
        <Links />
      </div>
      <Projects />
    </div>
  );
}

export default App;
