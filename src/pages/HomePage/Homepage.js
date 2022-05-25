import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function Homepage() {
 
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
