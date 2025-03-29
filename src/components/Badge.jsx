const Badge = ({ text }) => {
  return (
    <span
      className="bg-gray-300 dark:bg-zinc-700 text-gray-900 dark:text-gray-100 
        px-3 py-1 rounded-full text-xs font-medium"
    >
      {text}
    </span>
  );
};

export default Badge;
