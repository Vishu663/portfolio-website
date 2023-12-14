import Header from "../src/pages/Header/Header";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Projects from "../src/pages/Projects/Projects";
import Contact from "../src/pages/Contact/Contact";
import "./styles.css";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
