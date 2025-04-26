import React, { useState } from "react";
import TutorialPage from "./components/v1/TutorialPage";
import BasicCalculator from "./components/v1/BasicCalculator";
import ScientificCalculator from "./components/v1/ScientificCalculator";

export default function AppVersion1() {
  const [view, setView] = useState("tutorial");

  return (
    <div style={styles.app}>
      <nav style={styles.nav}>
        {["tutorial", "basic", "scientific"].map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            style={view === v ? styles.activeTab : styles.tab}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </nav>
      <main style={styles.main}>
        {view === "tutorial" && <TutorialPage />}
        {view === "basic" && <BasicCalculator />}
        {view === "scientific" && <ScientificCalculator />}
      </main>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "sans-serif",
    color: "#fff",
    background: "#000",
    height: "100vh",
    backgroundImage: 'url("https://www.pixelstalk.net/wp-content/uploads/2016/05/Math-Mathematics-Formula-Wallpaper-for-PC.jpg")',
  },
  nav: { display: "flex", background: "#111" },
  tab: {
    flex: 1,
    padding: 12,
    background: "#222",
    color: "#ccc",
    border: "none",
  },
  activeTab: {
    flex: 1,
    padding: 12,
    background: "#000",
    color: "#fff",
    border: "none",
    fontWeight: "bold",
  },
  main: { padding: 5 },
};
