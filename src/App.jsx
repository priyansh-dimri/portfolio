import MainContent from "./layouts/MainContent";
import NavPanel from "./layouts/NavPanel";

function App() {
  return (
    <div>
      <NavPanel />
      <MainContent />
      <NavPanel />
    </div>
  );
}

export default App;
