import React from "react";

const RollButton = ({ onRoll, disabled, rolling }) => {
  return (
    <button
      className={`roll-button ${disabled ? "disabled" : ""} ${
        rolling ? "blur" : ""
      }`}
      onClick={onRoll}
      disabled={disabled}
    ></button>
  );
};

export default RollButton;
