import React from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Science from "./components/Science";
import Sports from "./components/Sports";
import Business from "./components/Business";
import World from "./components/World";
import Politics from "./components/Politics";
import Automobile from "./components/Automobile";
import All from "./components/All";
import { SecondFile } from "./components/SecondFile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="science" element={<Science />} />
        <Route path="sports" element={<Sports />} />
        <Route path="business" element={<Business />} />
        <Route path="world" element={<World />} />
        <Route path="politics" element={<Politics />} />
        <Route path="automobile" element={<Automobile />} />
        <Route path="/" element={<All />} />
        <Route path="secondFile" element={<SecondFile />} />
      </Routes>
    </>
  );
}

export default App;
