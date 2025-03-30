import MainContent from "./layouts/MainContent";
import NavPanel from "./layouts/NavPanel";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col sm:pb-8 lg:grid lg:grid-cols-[1fr_4fr]
      px-6 pt-8 pb-14 gap-4 
      bg-slate-100 text-slate-900 dark:bg-zinc-900 dark:text-zinc-100"
    >
      <NavPanel />
      <MainContent />
    </div>
  );
}

export default App;
