import Badge from "./Badge";

const exploringTopics = [
  "Designing low-latency, fault-tolerant backend systems",
  "Performance optimization across the stack (CPU, memory, I/O, concurrency)",
  "System design trade-offs in distributed and security-critical systems",
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
