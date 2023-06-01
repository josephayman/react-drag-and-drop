// Make a list of student names and their picture paths

import React from "react";

function Klasse() {
  // Make a list of student names and their picture paths
  const students = {
    kari: "logo192.png",
    ole: "logo192.png",
    per: "logo192.png",
    pål: "logo192.png",
    nina: "logo192.png",
    karin: "logo192.png",
  };

  const handleDragStart = (e, student) => {
    e.dataTransfer.setData("student", student);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {Object.keys(students).map((student) => (
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, student)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <img
            src={students[student]}
            alt={student}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <p
            style={{
                textAlign: "center",
                width: "100px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                }}
          >{student}</p>
        </div>
      ))}
    </div>
  );
}

export default Klasse;
