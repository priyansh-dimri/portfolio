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
      flex flex-col text-center items-center w-full max-w-full overflow-hidden
      grid grid-cols-2 gap-4 lg:flex lg:flex-col"
    >
      <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-[auto_1fr] lg:flex lg:flex-col lg:justify-center lg:items-center col-span-2 gap-4 lg:gap-0">
        <div className="row-span-2">
          <ImageComponent
            src={profilePicture}
            alt="Profile Picture"
            className="row-span-2"
          />
        </div>
        <p className="text-xl lg:py-2 font-semibold text-start sm:self-end">
          Priyansh Dimri
        </p>
        <p className="sm:text-start sm:self-start lg:self-center">
          <Badge text={"Software Engineer"} />
        </p>
      </div>

      <motion.hr
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="border-t border-gray-300 dark:border-zinc-700 my-4 w-full col-span-2"
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
      <div className="hidden lg:block">
        <ThemeToggle />
      </div>
      <div className="lg:hidden absolute top-8 right-6">
        <ThemeToggle />
      </div>
    </motion.div>
  );
};

export default NavPanel;
