import React from "react";
import { FaStar } from "react-icons/fa";

type StarSelectorProps = {
  numStars: number;
};

export default function StarSelector({ numStars }: StarSelectorProps) {
  const [rating, setRating] = React.useState<number>(0);
  const [hover, setHover] = React.useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center w-2xl m-4 p-4 border-2 border-gray-300 rounded">
      <h2 className="mb-3">Give a star</h2>
      <div className="flex">
        {Array.from({ length: numStars }, (_, i) => (
          <span key={i} className="text-2xl cursor-pointer">
            <FaStar
              key={i}
              onClick={() => setRating(i + 1)}
              onMouseEnter={() => setHover(i + 1)}
              onMouseLeave={() => setHover(0)}
              color={i < (hover || rating) ? "gold" : "black"}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
