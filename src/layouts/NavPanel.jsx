import profilePicture from "../assets/images/profilePicture.png";
import email from "../assets/images/email.svg";
import location from "../assets/images/location.svg";
import Badge from "../components/Badge";
import ImageComponent from "../components/ImageComponent";
import InfoCard from "../components/InfoCard";
import ThemeToggle from "../components/ThemeToggle";
import { motion } from "framer-motion";

const NavPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
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

      <motion.hr
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="border-t border-gray-300 dark:border-zinc-700 my-4 w-full"
      />

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
      <ThemeToggle />
    </motion.div>
  );
};

export default NavPanel;
