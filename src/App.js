import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Mint from "./components/Mint";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-darkblue">
      <Navbar />
      <Mint />
      <Roadmap/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
