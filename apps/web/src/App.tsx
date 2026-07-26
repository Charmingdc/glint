import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
