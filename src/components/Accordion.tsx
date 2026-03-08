const data = [
  {
    id: "1",
    question: "Why is the sky blue?",
    answer:
      "The sky appears blue because of Rayleigh scattering. Shorter blue wavelengths of sunlight are scattered in all directions by the gases and particles in Earth's atmosphere.",
  },
  {
    id: "2",
    question: "How long is a day on Venus?",
    answer:
      "A single day on Venus (one full rotation) lasts about 243 Earth days, which is actually longer than its entire year (225 Earth days).",
  },
  {
    id: "3",
    question: "What is the 'Golden Ratio'?",
    answer:
      "The Golden Ratio is a mathematical constant approximately equal to 1.618, often found in nature and used in art and architecture to create aesthetically pleasing designs.",
  },
  {
    id: "4",
    question: "What is the largest mammal?",
    answer:
      "The largest mammal is the blue whale (Balaenoptera musculus), which can reach lengths of up to 100 feet and weigh as much as 200 tons.",
  },
];

export default function Accordion() {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
