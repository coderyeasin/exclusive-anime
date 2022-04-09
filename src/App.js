import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExploreAnime from "./components/ExploreAnime/ExploreAnime";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="anime/:id" element={<ExploreAnime />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
