import profilePicture from "../assets/images/profilePicture.png";
import ImageComponent from "../components/ImageComponent";

const NavPanel = () => {
  return (
    <div
      className="bg-slate-200 dark:bg-zinc-800 
      border border-slate-300 dark:border-zinc-700
      p-4 rounded-xl"
    >
      <ImageComponent src={profilePicture} alt="Profile Picture" />
    </div>
  );
};

export default NavPanel;
