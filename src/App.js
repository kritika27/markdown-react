import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

export default function App() {
  const [markdown, setMarkdown] = useState("# Markdown");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <header>
        <div className="row">
          <div className="column">
            <div className="column1">
              <textarea value={markdown} onChange={handleChange}></textarea>
            </div>
          </div>
          <div className="column">
            <div className="column2">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
