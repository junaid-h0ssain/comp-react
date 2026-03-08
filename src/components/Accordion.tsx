import React from "react";

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

  const [selected, setSelected] = React.useState<string | null>(null);

  function toggle(id: string) {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
    console.log(selected);
  }

  return (
    <div className="flex flex-col text-center justify-center w-2xl m-4 p-4">
      {data.map((item) => (
        <div onClick={() => toggle(item.id)} key={item.id} className="flex flex-col m-4 p-4 border-2 border-gray-300 rounded">
          <h3>{item.question}</h3>
          {selected === item.id && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
