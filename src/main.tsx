import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import AppRomania from "./app/AppRomania.tsx";
import AppNigeria from "./app/AppNigeria.tsx";
import "./styles/index.css";

type Tab = "default" | "romania" | "nigeria";

function tabFromHash(): Tab | null {
  const h = window.location.hash.replace(/^#\/?/, "").toLowerCase();
  if (h === "default" || h === "romania" || h === "nigeria") return h;
  return null;
}

function Root() {
  const [tab, setTab] = useState<Tab>(() => {
    const fromHash = tabFromHash();
    if (fromHash) return fromHash;
    try {
      const saved = localStorage.getItem("bolt-send-tab");
      if (saved === "default" || saved === "romania" || saved === "nigeria") return saved;
      return "romania";
    } catch {
      return "romania";
    }
  });

  useEffect(() => {
    const onHashChange = () => {
      const fromHash = tabFromHash();
      if (fromHash) setTab(fromHash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const select = (t: Tab) => {
    setTab(t);
    try { localStorage.setItem("bolt-send-tab", t); } catch {}
    if (window.location.hash !== `#/${t}`) {
      window.history.replaceState(null, "", `#/${t}`);
    }
  };

  return (
    <>
      {import.meta.env.DEV && (
        <div
          className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex gap-1 bg-white/85 backdrop-blur-md p-1 rounded-full shadow-sm border border-gray-200"
        >
          {([
            ["default", "Default"],
            ["romania", "Romania"],
            ["nigeria", "Nigeria"],
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
      )}
      {tab === "romania" ? <AppRomania /> : tab === "nigeria" ? <AppNigeria /> : <App />}
    </>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
