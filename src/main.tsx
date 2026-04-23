import { useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import AppRomania from "./app/AppRomania.tsx";
import "./styles/index.css";

type Tab = "default" | "romania";

function Root() {
  const [tab, setTab] = useState<Tab>(() => {
    try {
      const saved = localStorage.getItem("bolt-send-tab");
      return saved === "default" ? "default" : "romania";
    } catch {
      return "romania";
    }
  });

  const select = (t: Tab) => {
    setTab(t);
    try { localStorage.setItem("bolt-send-tab", t); } catch {}
  };

  return (
    <>
      <div
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex gap-1 bg-white/85 backdrop-blur-md p-1 rounded-full shadow-sm border border-gray-200"
      >
        {([
          ["default", "Default"],
          ["romania", "Romania"],
        ] as const).map(([key, label]) => (
          <button
            key={key}
            onClick={() => select(key)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-colors ${
              tab === key ? "bg-black text-white" : "text-gray-600 hover:text-black"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {tab === "romania" ? <AppRomania /> : <App />}
    </>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
