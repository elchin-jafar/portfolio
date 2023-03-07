import About from "./pages/About";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
