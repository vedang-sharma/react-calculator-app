import React, { useState, useEffect } from "react";
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
  { sym: "sin", desc: "Sine (radians)", ex: "sin(π/2) = 1" },
  { sym: "cos", desc: "Cosine (radians)", ex: "cos(π) = −1" },
  { sym: "tan", desc: "Tangent (radians)", ex: "tan(π/4) = 1" },
  { sym: "log", desc: "Base-10 log", ex: "log(100) = 2" },
  { sym: "ln", desc: "Natural log", ex: "ln(e) = 1" },
  { sym: "√", desc: "Square root", ex: "√9 = 3" },
  { sym: "^", desc: "Exponent", ex: "2^3 = 8" },
];

export default function TutorialPage() {
  const [mode, setMode] = useState("basic");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(() =>
    JSON.parse(localStorage.getItem("notes") || "[]")
  );
  const [step, setStep] = useState("tutorial");

  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  
  const handleAddNote = () => {
    const t = note.trim();
    if (t) {
      setNotes((prev) => [...prev, t]);
      setNote("");
    }
  };
  
  const handleDeleteNote = (idx) => {
    setNotes((prev) => prev.filter((_, i) => i !== idx));
  };
  
  const data = mode === "basic" ? BASIC : SCI;
  
  if (step === "scientific") return <ScientificCalculator />;
  else if (step === "basic") return <BasicCalculator />;
  
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tutorial</h1>

      <div style={styles.radioGroup}>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="mode"
            value="basic"
            checked={mode === "basic"}
            onChange={() => setMode("basic")}
            style={styles.radioInput}
          />
          Basic
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="mode"
            value="scientific"
            checked={mode === "scientific"}
            onChange={() => setMode("scientific")}
            style={styles.radioInput}
          />
          Scientific
        </label>
      </div>

      <ul style={styles.scrollContainer}>
        {data.map((k, i) => (
          <ul key={i} style={styles.item}>
            <strong>{k.sym}</strong>: {k.desc}. Example:{" "}
            <code style={styles.code}>{k.ex}</code>
          </ul>
        ))}
      </ul>

      <textarea
        id="notes"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={styles.textBox}
        placeholder="Type your notes here..."
      />
      <button onClick={handleAddNote} style={styles.addNoteBtn}>
        Add Note
      </button>

      <div style={styles.nav}>
        <button onClick={() => setStep("basic")} style={styles.navBtn}>
          Basic Calculator
        </button>
        <button onClick={() => setStep("scientific")} style={styles.navBtn}>
          Scientific Calculator
        </button>
      </div>

      <label htmlFor="notes" style={styles.label}>
        Previous Notes
      </label>
      <ul style={styles.noteList}>
        {notes.map((n, i) => (
          <li key={i} style={styles.noteItem}>
            <span style={styles.noteText}>{n}</span>
            <button
              onClick={() => handleDeleteNote(i)}
              style={styles.deleteBtn}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#000",
    padding: "20px",
    borderRadius: "20px",
    width: "500px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "auto",
    color: "#000",
    fontFamily: "Helvetica, Arial, sans-serif",
  },
  title: {
    fontSize: 36,
    fontWeight: "300",
    marginBottom: 20,
    color: "#FF9500",
    fontWeight: "800",
  },
  radioGroup: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    color: "#fff",
    fontWeight: 800,
  },
  radioLabel: {
    display: "flex",
    alignItems: "center",
    marginRight: 20,
    fontSize: 18,
    cursor: "pointer",
  },
  radioInput: {
    marginRight: 8,
    width: 18,
    height: 18,
    accentColor: "#FF9500",
  },
  scrollContainer: {
    width: "100%",
    maxWidth: 400,
    maxHeight: 250,
    overflowY: "auto",
    marginBottom: 20,
    padding: 10,
    background: "#f2f2f2",
    borderRadius: 12,
  },
  item: {
    marginBottom: 12,
    fontSize: 18,
  },
  code: {
    fontSize: 16,
    background: "transparent",
  },
  label: {
    width: "95%",
    maxWidth: 400,
    fontSize: 20,
    marginBottom: 8,
    textAlign: "left",
    color: "#FF9500",
    fontWeight: 800,
    padding: 10,
  },
  textBox: {
    width: "95%",
    maxWidth: 400,
    minHeight: 80,
    padding: 12,
    marginBottom: 20,
    borderRadius: 12,
    border: "1px solid #ccc",
    background: "#fff",
    color: "#000",
    fontSize: 16,
    resize: "vertical",
  },
  addNoteBtn: {
    width: "30%",
    maxWidth: 400,
    padding: 15,
    background: "#FF9500",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20
  },
  nav: { marginTop: 10, display: "flex", gap: 12 },
  navBtn: {
    flex: 1,
    padding: 12,
    background: "#f90",
    color: "#fff",
    border: "none",
    borderRadius: 6,
  },
  noteList: {
    width: "95%",
    maxWidth: 400,
    listStyle: "none",
    padding: 0,
    background: "#f2f2f2",
    borderRadius: 8,
  },
  noteItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    padding: 10,
    background: "transparent",
    borderRadius: 12,
    fontSize: 18,
  },
  noteText: {
    flex: 1,
  },
  deleteBtn: {
    marginLeft: 10,
    background: "transparent",
    border: "none",
    color: "#FF3B30",
    fontSize: 18,
    cursor: "pointer",
  },
};
