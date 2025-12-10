import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuroraBackground } from "./components/ui/shadcn-io/aurora-background/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuroraBackground>
      <div className="relative z-10 h-full scroll-smooth overflow-scroll">
        <App />
      </div>
    </AuroraBackground>
  </StrictMode>
);
