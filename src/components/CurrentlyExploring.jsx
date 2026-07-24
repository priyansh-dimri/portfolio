import Badge from "./Badge";

const exploringTopics = [
  "Building high-performance systems with efficient memory layouts, SIMD, and parallel execution",
  "Distributed systems, fault tolerance, and scalable backend architecture",
  "Query optimization, storage engines, and the design trade-offs behind modern databases",
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
