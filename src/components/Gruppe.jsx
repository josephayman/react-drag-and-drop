import React, { useState } from "react";

const Gruppe = ({name}) => {
  const [group, setGroup] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const student = e.dataTransfer.getData("student");
    setGroup((oldGroup) => [...oldGroup, student]);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: "200px",
        height: "200px",
      }}
    >
      {name}
      {group.map((student) => (
        <p>{student}</p>
      ))}
    </div>
  );
};

export default Gruppe;
