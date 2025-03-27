import MainContent from "./layouts/MainContent";
import MobileNav from "./layouts/MobileNav";
import NavPanel from "./layouts/NavPanel";

function App() {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-[auto_1fr] p-4 gap-4 bg-slate-100 text-slate-900 dark:bg-zinc-900 dark:text-zinc-100">
      <NavPanel />
      <MainContent />
      {/* <MobileNav/> Only for mobiles */}
    </div>
  );
}

export default App;
