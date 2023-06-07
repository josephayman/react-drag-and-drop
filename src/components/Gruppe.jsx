import React, { useState } from "react";
import "../styles/Gruppe.css";

const Gruppe = ({ name, removeStudent }) => {
  const [group, setGroup] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const student = JSON.parse(e.dataTransfer.getData("student"));
    setGroup((oldGroup) => [...oldGroup, student]);
    removeStudent(student.name);
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
          <div>
            <img
              src={"/icons/"+student.img}
              alt={student.name}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <p>{student.name}</p>
          </div>
        ))}
      </div>
      <button>Gi gruppe matrett</button>
    </div>
  );
};

export default Gruppe;
