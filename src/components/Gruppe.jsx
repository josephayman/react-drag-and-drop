import React, { useState } from "react";
import "../styles/Gruppe.css";

// Funksjonen tar inn navnet på gruppen, og to funksjoner som legger til og fjerner elever fra gruppen

const Gruppe = ({ name, addStudentToGroup, removeStudentFromGroup }) => {
  const [group, setGroup] = useState([]);

  // Funksjonen håndterer når et element dras
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Funksjonen håndterer når et element slippes
  const handleDrop = (e) => {
    const student = JSON.parse(e.dataTransfer.getData("student"));
    setGroup((oldGroup) => [...oldGroup, student]);
    addStudentToGroup(student.name);
  };

  // Funksjonen håndterer når et element klikkes (Sletter fra gruppe og legger tilbake i klasse)
  const handleClick = (studentName) => {
    setGroup((oldGroup) =>
      oldGroup.filter((student) => student.name !== studentName)
    );
    removeStudentFromGroup(studentName);
  };

  return (
    <div className="gruppe-wrapper">
      <h3>{name}</h3>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="gruppe-container"
      >
        {group.map((student) => (
          <div
            className="student-element"
            onClick={() => handleClick(student.name)}
          >
            <img
              src={"/icons/" + student.img}
              alt={student.name}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <p>{student.name}</p>
            {/* Vises når brukerer hoverer på elementet */}
            <div className="remove-message">Fjern</div>
          </div>
        ))}
      </div>
      <button>Gi gruppe matrett</button>
    </div>
  );
};

export default Gruppe;
