import ImageComponent from "./ImageComponent";
import profilesData from "./ProfilesData";

const ProfilesSection = () => {
  return (
    <section className="my-16 px-6 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {profilesData.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-6 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <ImageComponent
                src={profile.icon}
                size={48}
                className="relative z-10"
              />
            </div>
            <span className="text-xl font-medium dark:text-white">
              {profile.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProfilesSection;
