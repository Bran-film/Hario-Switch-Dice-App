import React, { useState, useEffect, useRef } from "react";

const Dice = ({ roll, setRoll, diceOptions }) => {
  const [result, setResult] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const randomOffsetX = useRef(Math.floor(Math.random() * 10) + 1);
  const randomOffsetY = useRef(Math.floor(Math.random() * 10) + 1);

  useEffect(() => {
    let timer;
    if (roll) {
      setSpinning(true);
      const randomIndex = Math.floor(Math.random() * diceOptions.length);
      const randomX =
        Math.floor(Math.random() * 4) * 90 + randomOffsetX.current;
      const randomY =
        Math.floor(Math.random() * 4) * 360 + randomOffsetY.current;
      timer = setTimeout(() => {
        setResult({ index: randomIndex, rotation: { x: randomX, y: randomY } });
        setSpinning(false);
        setRoll(false);
      }, 4050);
    }
    return () => clearTimeout(timer);
  }, [roll, setRoll, diceOptions]);

  return (
    <div className="dice-container">
      <div
        className={`dice${spinning ? " rolling" : ""}`}
        style={
          result
            ? {
                transform: `rotateX(${result.rotation.x}deg) rotateY(${result.rotation.y}deg)`,
              }
            : {}
        }
      >
        {diceOptions.map((option, index) => (
          <div
            key={index}
            className={`face face-${index + 1}`}
            aria-label={option}
          >
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dice;
