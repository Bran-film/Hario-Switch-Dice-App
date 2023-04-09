import React, { useState, useCallback } from "react";
import "./App.css";
import Dice from "./components/Dice";
import RollButton from "./components/RollButton.js";

const diceOptions = [
  // Dice 1: Coffee weight and total water
  [
    "15g coffee, 240ml water",
    "18g coffee, 288ml water",
    "20g coffee, 300ml water",
    "22g coffee, 352ml water",
    "24g coffee, 360ml water",
    "30g coffee, 500ml water",
  ],
  // Dice 2: Grind size and total brew time
  [
    "Fine, 1:45",
    "Medium-fine, 2:00",
    "Medium, 2:30",
    "Medium-coarse, 3:00",
    "Coarse, 3:30",
    "Your Choice",
  ],
  // Dice 3: Brewing method and bloom
  [
    "Standard V60 Brew / Bloom for 30 sec",
    "Hybrid method / Bloom for 30 sec / Open Switch",
    "Full immersion method / Bloom for 30 sec",
    "Standard V60 Brew / No bloom",
    "Hybrid method / No bloom / Open Switch for 30sec",
    "Full immersion method / No bloom",
  ],

  // Dice 4: Stirring
  [
    "Stir: No",
    "Stir: Yes, during bloom, 5s",
    "Stir: Yes, Wet WDT after bloom, 5s",
    "Stir: Yes, halfway through, 5s",
    "Stir: Yes, after all water is poured in, 5sec",
    "Stir: Yes, during bloom and halfway through, 5s each",
  ],

  // Dice 5: Water temperature
  ["95°C", "90°C", "85°C", "80°C", "75°C", "Your choice"],
];

function App() {
  const [rollCallbacks, setRollCallbacks] = useState([]);

  const registerRollCallback = useCallback((callback) => {
    setRollCallbacks((prev) => [...prev, callback]);
  }, []);

  const handleRoll = () => {
    rollCallbacks.forEach((callback) => callback());
  };

  return (
    <div className="App">
      <div className="dice-row">
        {diceOptions.map((options, index) => (
          <Dice
            key={index}
            diceOptions={options}
            onRegister={registerRollCallback}
          />
        ))}
      </div>
      <RollButton onRoll={handleRoll} />
    </div>
  );
}

export default App;
