import { useState } from "react";
import Header from "../../Header";
import Footer from "./Footer";
import HeroSection from "./Hero/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;
