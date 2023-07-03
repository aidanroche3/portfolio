import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LogoGrid from "./components/LogoGrid";

function App() {
  return (
    <>
      <div className="flex flex-wrap overflow-hidden">
        <Navbar />
        <Home />
        <LogoGrid />
      </div>
    </>
  );
}

export default App;
