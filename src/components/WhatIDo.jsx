import whatIDoData from "./WhatIDoData";

const WhatIDo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {whatIDoData.map((item, index) => (
        <div
          key={index}
          className="flex gap-4 items-start p-5
            bg-slate-200 dark:bg-zinc-800
            border border-r-0 border-b-0 border-gray-300 dark:border-zinc-700
            rounded-xl shadow-[1px_1px_2px_rgba(0,0,0,0.05)]"
        >
          <img src={item.icon} alt={item.title} className="w-10 h-10" />

          <div>
            <h3 className="text-lg font-semibold mb-1 dark:text-white">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatIDo;
