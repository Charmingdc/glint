import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Integrate } from "./components/Integrate";

import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="w-screen flex flex-col items-center bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Integrate />
      <Footer />
    </div>
  );
}
