import React from "react";
import Dice from "./Dice";
import "./DiceContainer.css";

const DiceContainer = ({ diceOptions, rolling }) => {
  const diceComponents = diceOptions.map((options, index) => (
    <Dice key={index} options={options} rolling={rolling} />
  ));

  return <div className="dice-container">{diceComponents}</div>;
};

export default DiceContainer;
