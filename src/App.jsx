import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LogoGrid from "./components/LogoGrid";
import ProjectGrid from "./components/ProjectGrid/";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <LogoGrid />
      <ProjectGrid />
      <About />
      <Footer />
    </>
  );
}

export default App;
