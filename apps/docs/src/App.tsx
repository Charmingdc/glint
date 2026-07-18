import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { DocsContent } from "./components/DocsContent";

export type SectionId =
  | "introduction"
  | "installation"
  | "usage"
  | "api"
  | "initials"
  | "http-api"
  | "typescript";

export default function App() {
  const [active, setActive] = useState<SectionId>("introduction");

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <div className="mx-auto flex w-full max-w-6xl flex-1 px-4 sm:px-6">
        <Sidebar active={active} onSelect={setActive} />
        <DocsContent active={active} onNavigate={setActive} />
      </div>
    </div>
  );
}
