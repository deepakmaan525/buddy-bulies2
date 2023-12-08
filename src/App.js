import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HeroSec from "./components/HeroSec";
import Mint from "./components/Mint";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Backtotop from "./components/BackToTop";

function App() {
  return (
    <div className="bg-darkblue">
      <Backtotop/>
      <HeroSec />
      <Mint />
      <Roadmap/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
