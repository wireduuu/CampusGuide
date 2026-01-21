import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import BuildingDetail from "./pages/BuildingDetails";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import buildings from "./data/buildings";

function App() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Header
        buildings={buildings}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelect={(building) => navigate(`/buildings/${building.id}`)}
      />

      {/* Page Content */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buildings/:id" element={<BuildingDetail />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;
