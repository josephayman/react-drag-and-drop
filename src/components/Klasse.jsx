import React from "react";
import "../styles/Klasse.css";

function Klasse({students}) {

  const handleDragStart = (e, student) => {
    e.dataTransfer.setData("student", JSON.stringify({ name: student, img: students[student] }));
  };

  return (
    <div className="klasse-container">
      {Object.keys(students).map((student) => (
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, student)}
          key={student}
          className="student-container"
        >
          <img
            src={"/icons/" + students[student]}
            alt={student}
          />
          <p>{student}</p>
        </div>
      ))}
    </div>
  );
}

export default Klasse;
