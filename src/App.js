import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ExploreAnime from "./components/ExploreAnime/ExploreAnime";
import Home from "./components/Home/Home";


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="anime/:id" element={<ExploreAnime />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
