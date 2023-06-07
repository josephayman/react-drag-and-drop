import React, { useState } from "react";
import Klasse from "./components/Klasse";
import Gruppe from "./components/Gruppe";
import Nav from "./components/Nav";
import "./styles/App.css";

function App() {
  const groupCount = 6; // The number of groups you want to create

  const [students, setStudents] = useState({
    Kari: "icon1.png",
    Ole: "icon2.png",
    Per: "icon3.png",
    Pål: "icon4.png",
    Nina: "icon5.png",
    Kjell: "icon6.png",
    Jon: "icon1.png",
    Rona: "icon2.png",
    Will: "icon3.png",
    Mona: "icon4.png",
    Siv: "icon5.png",
    Svein: "icon6.png",
    Inge: "icon1.png",
    Borge: "icon2.png",
    Klaus: "icon3.png",
    Erik: "icon4.png",
  });

  const removeStudent = (student) => {
    setStudents((prevStudents) => {
      const newStudents = { ...prevStudents };
      delete newStudents[student];
      return newStudents;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="Hero">
        <h1>Klasser</h1>
        <div className="hero-utils">
          <input className="search" type="text" placeholder="Søk etter elev" />
          <div className="select-wrapper">
            <select>
              <option value="tåsen">Tåsen skole</option>
              <option value="børresen">Børresen skole</option>
              <option value="bøler">Bøler skole</option>
            </select>
            <select>
              <option value="6A">Klasse 6A</option>
              <option value="6B">Klasse 6B</option>
              <option value="6C">Klasse 6C</option>
              <option value="6D">Klasse 6D</option>
              <option value="6E">Klasse 6E</option>
            </select>
          </div>
        </div>
        <p>Klasse 6A</p>
        <Klasse students={students} />
      </div>
      <div className="section">
        <div className="grupperinger-wrapper">
          <h2>Grupperinger</h2>
          <div className="Grupperinger">
            {Array.from({ length: groupCount }, (_, i) => (
              <Gruppe
                key={i}
                name={`Gruppe ${i + 1}`}
                removeStudent={removeStudent}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="stats-wrapper">
          <h2>Klassens progresjon</h2>
          <img src="stats.png" alt="progression" />
        </div>
      </div>
    </div>
  );
}

export default App;
