import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import BuildingDetail from "./pages/BuildingDetails";
import Header from "./components/layout/Header";
import buildings from "./data/buildings";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-background">
      <Header
        buildings={buildings}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelect={(building) =>
          navigate(`/buildings/${building.id}`)
        }
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buildings/:id" element={<BuildingDetail />} />
      </Routes>
    </main>
  );
}

export default App;
