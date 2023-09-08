import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LogoGrid from "./components/LogoGrid";
import ProjectGrid from "./components/ProjectGrid/";
import About from "./components/About";
import Footer from "./components/Footer";
import Involvement from "./components/Involvement";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <LogoGrid />
      <ProjectGrid />
      <Involvement />
      <About />
      <Footer />
    </>
  );
}

export default App;
