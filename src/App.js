import "./App.css";
import Kanban from "./components/kanban/Kanban";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Kanban UI</h1>
      <h3 style={{ marginBottom: "20px" }}>Move some tokens</h3>
      <Kanban />
    </div>
  );
}

export default App;
