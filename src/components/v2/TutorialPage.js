import React, { useState } from "react";
import BasicCalculator from "./BasicCalculator";
import ScientificCalculator from "./ScientificCalculator";

const BASIC = [
  { sym: "+", desc: "Addition", ex: "2 + 3 = 5" },
  { sym: "−", desc: "Subtraction", ex: "5 − 2 = 3" },
  { sym: "×", desc: "Multiplication", ex: "4 × 3 = 12" },
  { sym: "÷", desc: "Division", ex: "6 ÷ 2 = 3" },
  { sym: ".", desc: "Decimal point", ex: "3.14" },
];

const SCI = [
  { sym: "sin", desc: "Sine (rad)", ex: "sin(π/2) = 1" },
  { sym: "cos", desc: "Cosine (rad)", ex: "cos(π) = −1" },
  { sym: "tan", desc: "Tangent (rad)", ex: "tan(π/4) = 1" },
  { sym: "log", desc: "Base-10 log", ex: "log(100) = 2" },
  { sym: "ln", desc: "Natural log", ex: "ln(e) = 1" },
  { sym: "√", desc: "Square root", ex: "√9 = 3" },
  { sym: "^", desc: "Exponentiation", ex: "2^3 = 8" },
];

export default function TutorialPage() {
  const [step, setStep] = useState("tutorial"); // 'tutorial' | 'basic' | 'scientific'
  const [mode, setMode] = useState("basic"); // for symbol list toggle
  const list = mode === "basic" ? BASIC : SCI;

  if (step === "scientific") return <ScientificCalculator />;
  if (step === "basic") return <BasicCalculator />;

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Tutorial</h1>

      <div style={styles.toggle}>
        <button
          onClick={() => setMode("basic")}
          style={mode === "basic" ? styles.activeToggle : styles.toggleBtn}
        >
          Basic Symbols
        </button>
        <button
          onClick={() => setMode("scientific")}
          style={mode === "scientific" ? styles.activeToggle : styles.toggleBtn}
        >
          Scientific Symbols
        </button>
      </div>

      <ul style={styles.list}>
        {list.map(({ sym, desc, ex }, i) => (
          <li key={i} style={styles.item}>
            <strong>{sym}</strong> — {desc}. Example: <code>{ex}</code>
          </li>
        ))}
      </ul>

      <div style={styles.nav}>
        <button onClick={() => setStep("basic")} style={styles.navBtn}>
          Go to Basic Calculator
        </button>
        <button onClick={() => setStep("scientific")} style={styles.navBtn}>
          Go to Scientific Calculator
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    color: "#fff",
    background: "#000",
    padding: 20,
    minHeight: "100vh",
  },
  title: { fontSize: 24, marginBottom: 20 },
  toggle: { marginBottom: 20 },
  toggleBtn: {
    marginRight: 10,
    padding: 8,
    background: "#333",
    color: "#ccc",
    border: "none",
    borderRadius: 4,
  },
  activeToggle: {
    marginRight: 10,
    padding: 8,
    background: "#555",
    color: "#fff",
    border: "none",
    borderRadius: 4,
  },
  list: { listStyle: "none", padding: 0 },
  item: { marginBottom: 12 },
  nav: { marginTop: 30, display: "flex", gap: 12 },
  navBtn: {
    flex: 1,
    padding: 12,
    background: "#f90",
    color: "#fff",
    border: "none",
    borderRadius: 6,
  },
};
