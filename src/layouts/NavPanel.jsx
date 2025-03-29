import profilePicture from "../assets/images/profilePicture.png";
import email from "../assets/images/email.svg";
import location from "../assets/images/location.svg";
import Badge from "../components/Badge";
import ImageComponent from "../components/ImageComponent";
import InfoCard from "../components/InfoCard";

const NavPanel = () => {
  return (
    <div
      className="bg-slate-200 dark:bg-zinc-800 
      border border-slate-300 dark:border-zinc-700
      p-4 rounded-xl
      flex flex-col text-center items-center w-full max-w-full overflow-hidden"
    >
      <ImageComponent src={profilePicture} alt="Profile Picture" />
      <p className="text-xl py-2 font-semibold">Priyansh Dimri</p>
      <p>
        <Badge text={"Software Engineer"} />
      </p>
      <hr className="border-t border-gray-300 dark:border-zinc-700 my-4 w-full" />

      <InfoCard
        icon={email}
        alt="Email"
        label="EMAIL"
        value="priyanshd0908@gmail.com"
      />

      <InfoCard
        icon={location}
        alt="Location"
        label="LOCATION"
        value="Delhi, India"
      />
    </div>
  );
};

export default NavPanel;
