import Klasse from "./components/Klasse";
import Gruppe from "./components/Gruppe";
import "./App.css";

function App() {
  const groupCount = 6; // The number of groups you want to create

  return (
    <div className="App">
      <header className="App-header">
        <p>Klasse 6A</p>
        <Klasse />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: "40px",
          }}
          >
          {Array.from({ length: groupCount }, (_, i) => (
            <Gruppe key={i} name={`Gruppe ${i + 1}`} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
