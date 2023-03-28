import React, { useState } from "react";

function DateComponent({ userDetails, onCalculateSundays }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const sundays = calculateSundays(startDate, endDate);
    onCalculateSundays(userDetails, sundays);
  };

  const calculateSundays = (start, end) => {
    let sundays = 0;
    const currentDate = new Date(start);
    while (currentDate <= new Date(end)) {
      if (currentDate.getDay() === 0) {
        sundays++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return sundays;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <br />
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default DateComponent;