import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/room" element={<Home />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/room/:roomID" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
