import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import MainSection from "./Components/MainSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./Components/TvShows";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          {/* non vedo il cambio indirizzo al click su tvshows in navbar */}
          <Route element={<TvShows />} path="/tv-shows" />
          <Route element={<MainSection />} path="/" />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
