import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import MainSection from "./Components/MainSection";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <MainSection />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
