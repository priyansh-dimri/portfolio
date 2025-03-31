import Badge from "./Badge";

const exploringTopics = [
  "Optimized full-stack architectures for better scalability & security",
  "Advanced cybersecurity techniques (penetration testing, secure coding)",
  "Efficient developer workflows to enhance productivity 🚀",
];

const CurrentlyExploring = () => {
  return (
    <ul className="space-y-2">
      {exploringTopics.map((topic, index) => (
        <li key={index}>
          <Badge text={topic} key={index} />
        </li>
      ))}
    </ul>
  );
};

export default CurrentlyExploring;
