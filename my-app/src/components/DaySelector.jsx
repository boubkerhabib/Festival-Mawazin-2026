import React from 'react';

function DaySelector({ days, selectedDay, onSelectDay }) {
  return (
    <div className="day-selector">
      {days.map(day => (
        <button
          key={day}
          className={`day-btn ${selectedDay === day ? 'active' : ''}`}
          onClick={() => onSelectDay(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
}

export default DaySelector;