import ImageComponent from "./ImageComponent";

const InfoCard = ({ icon, label, value, alt = "Icon" }) => {
  return (
    <div className="flex items-center gap-2 w-full mb-4 col-span-2 sm:col-span-1">
      <ImageComponent
        src={icon}
        alt={alt}
        size={48}
        className="flex-shrink-0"
      />

      <div className="flex flex-col items-start overflow-hidden flex-1 text-left">
        <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-slate-400">{label}</p>
        <p
          className="text-xs font-medium 
        truncate w-full overflow-hidden 
        whitespace-nowrap text-ellipsis text-left"
        >
          {value}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
