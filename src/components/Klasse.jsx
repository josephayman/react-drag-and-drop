import React from "react";
import "../styles/Klasse.css";

function Klasse({ students }) {
  // Funksjonen håndterer når et element dras
  const handleDragStart = (e, student) => {
    e.dataTransfer.setData(
      "student",
      JSON.stringify({ name: student, img: students[student].img })
    );
  };

  return (
    <div className="klasse-container">
      {/* Loop gjennom alle elever som ikke er i en gruppe */}
      {Object.keys(students)
        .filter((student) => !students[student].inGroup)
        .map((student) => (
          <div
            draggable
            onDragStart={(e) => handleDragStart(e, student)}
            className="student-container"
          >
            <img src={"/icons/" + students[student].img} alt={student} />
            <p>{student}</p>
          </div>
        ))}
    </div>
  );
}

export default Klasse;
