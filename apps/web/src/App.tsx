import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Integrate } from "./components/Integrate";

import { Footer } from "./components/Footer";
import { AvatarConfigProvider } from "./lib/avatar-config";

export default function App() {
  return (
    <AvatarConfigProvider>
      <div className="app-gradient min-h-screen w-full flex flex-col items-center text-foreground">
        <Navbar />
        <Hero />
        <Features />
        <Integrate />
        <Footer />
      </div>
    </AvatarConfigProvider>
  );
}
