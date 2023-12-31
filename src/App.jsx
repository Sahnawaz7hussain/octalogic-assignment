import "./App.css";
import Sidebar from "./components/Sidebar";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[calc(100%-110px)]">
        <MainRoute />
      </div>
    </div>
  );
}

export default App;
