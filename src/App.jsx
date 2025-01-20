import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div className="text-4xl  font-signature">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact/>
    </div>
  );
}

export default App;
