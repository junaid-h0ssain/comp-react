import React from "react";


export default function RandomColorGenerator() {

  function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      // eslint-disable-next-line react-hooks/purity
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const [color, setColor] = React.useState<string>(generateRandomColor());

  return (
    <div className="flex flex-col text-center justify-center w-2xl m-4 p-4">
        <style>
          {`
            body{
                 background-color: ${color};
            }
          `}
        </style>
      <h1 className="font-mono font-extrabold text-3xl mb-3">Random Color Generator</h1>
      <button onClick={() => setColor(generateRandomColor())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-auto rounded">
        Generate Color
      </button>
    </div>
  );
}