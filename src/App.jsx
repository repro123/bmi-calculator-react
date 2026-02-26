import Header from "@/components/header/Header.jsx";
import HeroSection from "@/components/hero-section/HeroSection.jsx";

import React from "react";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Main() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}

export default App;
