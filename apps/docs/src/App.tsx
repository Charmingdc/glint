import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { DocsContent } from "./components/DocsContent";

export type SectionId =
  | "introduction"
  | "installation"
  | "quick-start"
  | "core-overview"
  | "core-api"
  | "core-options"
  | "core-svg"
  | "core-png"
  | "react-overview"
  | "react-installation"
  | "react-component"
  | "react-api"
  | "http-overview"
  | "http-endpoint"
  | "http-parameters"
  | "http-response"
  | "guide-initials"
  | "guide-blur-noise"
  | "guide-shapes"
  | "guide-seeds";

export default function App() {
  const [active, setActive] = useState<SectionId>("introduction");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function navigate(id: SectionId) {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar onMenuToggle={() => setSidebarOpen((v) => !v)} />
      <div className="mx-auto flex w-full max-w-6xl flex-1">
        <Sidebar active={active} onSelect={navigate} open={sidebarOpen} />
        <main className="min-w-0 flex-1 px-6 py-10">
          <DocsContent active={active} onNavigate={navigate} />
        </main>
      </div>
    </div>
  );
}
