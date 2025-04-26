import React, { useState } from "react";

const ScientificCalculator = () => {
  // ─────── State ───────
  const [expression, setExpression] = useState("");
  const [history, setHistory] = useState([]);
  const [maxHistory, setMaxHistory] = useState(10);

  // ─── Expose Math fns/constants for eval() ───
  const { sin, cos, tan, log, log10, sqrt, PI, E } = Math;

  // ─────── Handlers ───────
  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression("");
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(expression);
      const entry = `${expression} = ${evalResult}`;
      setHistory((prev) => [entry, ...prev].slice(0, maxHistory));
      setExpression(evalResult.toString());
    } catch {
      setExpression("Error");
    }
  };

  const handleSliderChange = (e) => {
    setMaxHistory(Number(e.target.value));
    setHistory((prev) => prev.slice(0, Number(e.target.value)));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleCalculate();
  };

  // ─────── Styles ───────
  const containerStyle = {
    backgroundColor: "#000",
    padding: "20px",
    borderRadius: "20px",
    width: "280px",
    margin: "auto",
    color: "#fff",
    fontFamily: "Helvetica, Arial, sans-serif",
  };

  const displayStyle = {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "2.5rem",
    textAlign: "right",
    padding: "10px",
    height: "80px",
    boxSizing: "border-box",
    border: "none",
    outline: "none",
    width: "280px",
  };

  const buttonBase = {
    width: "60px",
    height: "60px",
    margin: "4px",
    borderRadius: "30px",
    border: "none",
    fontSize: "1.5rem",
    boxShadow: "0 3px #555",
    cursor: "pointer",
  };

  const numberBtn = { ...buttonBase, backgroundColor: "#333", color: "#fff" };
  const operatorBtn = {
    ...buttonBase,
    backgroundColor: "#fe9500",
    color: "#fff",
  };
  const funcBtn = { ...buttonBase, backgroundColor: "#a5a5a5", color: "#000" };
  const equalsBtn = {
    ...buttonBase,
    backgroundColor: "#fe9500",
    color: "#fff",
    width: "264px",
    borderRadius: "30px",
  };
  const sliderStyle = { width: "100%", margin: "10px 0" };
  const historyStyle = {
    maxHeight: "150px",
    overflowY: "auto",
    backgroundColor: "#111",
    padding: "10px",
    borderRadius: "10px",
  };

  // ─────── Buttons Array ───────
  const buttons = [
    // — Scientific —
    { label: "sin", style: funcBtn, action: () => handleClick("sin(") },
    { label: "cos", style: funcBtn, action: () => handleClick("cos(") },
    { label: "tan", style: funcBtn, action: () => handleClick("tan(") },
    { label: "ln", style: funcBtn, action: () => handleClick("log(") },
    { label: "log", style: funcBtn, action: () => handleClick("log10(") },
    { label: "√", style: funcBtn, action: () => handleClick("sqrt(") },
    { label: "π", style: funcBtn, action: () => handleClick("PI") },
    { label: "e", style: funcBtn, action: () => handleClick("E") },
    { label: "(", style: funcBtn, action: () => handleClick("(") },
    { label: ")", style: funcBtn, action: () => handleClick(")") },
    { label: "^", style: funcBtn, action: () => handleClick("**") },

    // — Basic / Existing —
    { label: "C", style: funcBtn, action: handleClear },
    { label: "/", style: operatorBtn, action: () => handleClick("/") },
    { label: "7", style: numberBtn, action: () => handleClick("7") },
    { label: "8", style: numberBtn, action: () => handleClick("8") },
    { label: "9", style: numberBtn, action: () => handleClick("9") },
    { label: "*", style: operatorBtn, action: () => handleClick("*") },
    { label: "4", style: numberBtn, action: () => handleClick("4") },
    { label: "5", style: numberBtn, action: () => handleClick("5") },
    { label: "6", style: numberBtn, action: () => handleClick("6") },
    { label: "-", style: operatorBtn, action: () => handleClick("-") },
    { label: "1", style: numberBtn, action: () => handleClick("1") },
    { label: "2", style: numberBtn, action: () => handleClick("2") },
    { label: "3", style: numberBtn, action: () => handleClick("3") },
    { label: "+", style: operatorBtn, action: () => handleClick("+") },
    { label: ".", style: numberBtn, action: () => handleClick(".") },
    {
      label: "0",
      style: { ...numberBtn, width: "128px", borderRadius: "30px" },
      action: () => handleClick("0"),
    },
    { label: "=", style: equalsBtn, action: handleCalculate },
  ];

  return (
    <div style={containerStyle}>
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        onKeyDown={handleKeyDown}
        style={displayStyle}
        placeholder="0"
      />

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {buttons.map((btn, i) => (
          <button key={i} style={btn.style} onClick={btn.action}>
            {btn.label}
          </button>
        ))}
      </div>

      <div>
        <label style={{ display: "block", color: "#fff", marginTop: "10px" }}>
          History Length: {maxHistory}
          <input
            type="range"
            min="1"
            max="10"
            value={maxHistory}
            onChange={handleSliderChange}
            style={sliderStyle}
          />
        </label>
      </div>

      <div style={historyStyle}>
        <h3 style={{ margin: "0 0 10px 0", color: "#fff" }}>History</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {history.map((item, idx) => (
            <li
              key={idx}
              style={{ margin: "4px 0", fontSize: "0.9rem", color: "#fff" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScientificCalculator;
