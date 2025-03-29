import MainContent from "./layouts/MainContent";
import MobileNav from "./layouts/MobileNav";
import NavPanel from "./layouts/NavPanel";

function App() {
  return (
    <div
      className="h-screen grid grid-cols-1 lg:grid-cols-[1fr_4fr]
      px-6 py-8 gap-4 
      bg-slate-100 text-slate-900 dark:bg-zinc-900 dark:text-zinc-100"
    >
      <NavPanel />
      <MainContent />
      {/* <MobileNav/> Only for mobiles */}
    </div>
  );
}

export default App;
