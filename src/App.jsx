import About from "./pages/About";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import "./index.css";

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
