import React, { useState } from "react";
import "./App.css";

function App() {

  const [input, setInput] = useState("");
  const [secret, setSecret] = useState(false);

  const [incident, setIncident] = useState("");
  const [analysis, setAnalysis] = useState("");

  const [contact, setContact] = useState("");
  const [contacts, setContacts] = useState([]);

  const [history, setHistory] = useState([]);


  const handleClick = (value) => {
    const newInput = input + value;
    setInput(newInput);

    if (newInput === "1234=") {
      setSecret(true);
    }
  };


  const analyzeText = () => {

    const text = incident.toLowerCase();

    if (
      text.includes("scared") ||
      text.includes("hurt") ||
      text.includes("danger") ||
      text.includes("afraid") ||
      text.includes("threat")
    ) {
      setAnalysis("⚠ HIGH RISK – Consider contacting trusted support.");
    } else {
      setAnalysis("LOW RISK – Stay safe.");
    }

    if (incident !== "") {
      setHistory([...history, incident]);
    }
  };


  const addContact = () => {
    if (contact !== "") {
      setContacts([...contacts, contact]);
      setContact("");
    }
  };


  if (secret) {
    return (
      <div className="container">

        <h2>Silent Signals – AI Safety Companion</h2>

        <h3>Log Incident</h3>

        <textarea
          rows="4"
          placeholder="Describe the incident..."
          value={incident}
          onChange={(e) => setIncident(e.target.value)}
        />

        <br /><br />

        <button onClick={analyzeText}>Analyze Distress</button>

        {analysis && (
          <div style={{ marginTop: "15px", fontWeight: "bold", color: "red" }}>
            Risk Analysis Result: {analysis}
          </div>
        )}

        <br />

        <button onClick={() => {
  alert("Emergency Alert Sent to: " + contacts.join(", "));
}}>
  Send Emergency Alert
</button>

        <h3>Trusted Contacts</h3>

        <input
          type="text"
          placeholder="Enter contact name"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <br /><br />

        <button onClick={addContact}>Add Contact</button>

        <ul>
          {contacts.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>


        <h3>Incident History</h3>
        <h3>Safety Resources</h3>

<ul>
  <li>Women Helpline: 1091</li>
  <li>Police Emergency: 100</li>
  <li>Domestic Violence Helpline: 181</li>
  <li>National Commission for Women: 7827170170</li>
</ul>

        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>
    );
  }


  return (
    <div className="container">

      <h2>Calculator</h2>

      <input value={input} readOnly />

      <br /><br />

      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("3")}>3</button>
      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("=")}>=</button>

    </div>
  );
}

export default App;
