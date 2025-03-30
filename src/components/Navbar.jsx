const Navbar = ({ activeView, setActiveView }) => {
  console.log(activeView);
  return (
    <nav className="gap-7 sm:px-7 py-4 font-['Manrope']
      text-xs font-medium sm:font-bold
      flex justify-center sm:justify-end">
      {["about", "projects", "contact"].map((view) => (
        <button
          key={view}
          onClick={() => setActiveView(view)}
          className={`cursor-pointer transition-colors ${
            activeView === view ? "text-emerald-400" : "dark:text-zinc-300 text-slate-800"
          }`}
        >
          {view.charAt(0).toUpperCase() + view.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
