import React, { useState } from "react";

const RadioButton = () => {
  const options = ["Cricket", "football", "hockey"];
  const days = ["weekday", "weekend"];
  const [selectedOptions, setSelectedOption] = useState("");
  const [selectedDays, setSelectedDays] = useState("");
  const [showingSports, setShowingSports] = useState("");
  const [showingDays, setShowingDays] = useState("");

  const handleSportsChange = (e) => {
    setSelectedOption(e.target.value);
    setShowingSports(e.target.value);
  };

  const handleDaysChange = (e) => {
    setSelectedDays(e.target.value);
    setShowingDays(e.target.value);
  };

  return (
    <div>
      <h1>Sports</h1>
      {options.map((item, index) => (
        <div key={index}>
          <input
            type="radio"
            value={item}
            checked={selectedOptions === item}
            onChange={(e) => handleSportsChange(e)}
          />
          <label>{item}</label>
        </div>
      ))}
      <h1>Days</h1>
      {days.map((day, index) => (
        <div key={index}>
          <input
            type="radio"
            value={day}
            checked={selectedDays === day}
            onChange={(e) => handleDaysChange(e)}
          />
          <label>{day}</label>
        </div>
      ))}
      {showingDays && showingSports ? (
        <h1>
          {showingSports} is on the {selectedDays}
        </h1>
      ) : (
        <h1>Please Select Sports and Days</h1>
      )}
    </div>
  );
};

export default RadioButton;
