import React, { useState, useEffect } from "react";
import "../../../Style/PlanExpiryClock.css";


const PlanExpiryClock = ({ 
  expiryDate, 
  subscriptionType = 'thirtyMinutes', 

}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(expiryDate));

  function calculateTimeLeft(expiryDate) {
    const difference = new Date(expiryDate) - new Date();
    return {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(expiryDate);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  if (timeLeft.total <= 0) {
    return (
      <div className="clock-container rounded-md p-2 text-center">
        <span className="text-lg font-bold">Time's up!</span>
      </div>
    );
  }

  const renderTimeUnit = (value, label) => (
    <div className="time-unit flex flex-col items-center" key={label}>
      <div className="time-value-box flex items-center justify-center rounded-md p-1 w-full">
        <div className="time-value font-bold">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="time-label font-semibold mt-0.5">
        {label}
      </div>
    </div>
  );

  const getClockContent = () => {
    const clockTypeClass = `${subscriptionType === 'thirtyMinutes' || subscriptionType === 'hourly'
      ? 'minutes-clock' 
      : subscriptionType === 'daily' 
        ? 'hours-minutes-clock' 
        : 'default-clock'}`;

    switch (subscriptionType) {
      case 'thirtyMinutes':
        return (
          <div className={`${clockTypeClass} grid grid-cols-2 gap-1 sm:gap-2`}>
            {renderTimeUnit(timeLeft.minutes, 'Mins')}
            {renderTimeUnit(timeLeft.seconds, 'Secs')}
          </div>
        );
      case 'hourly':
      case 'daily':
        return (
          <div className={`${clockTypeClass} grid grid-cols-3 gap-1 sm:gap-2`}>
            {renderTimeUnit(timeLeft.hours, 'Hrs')}
            {renderTimeUnit(timeLeft.minutes, 'Mins')}
            {renderTimeUnit(timeLeft.seconds, 'Secs')}
          </div>
        );
      default:
        return (
          <div className={`${clockTypeClass} grid grid-cols-4 gap-1 sm:gap-2`}>
            {renderTimeUnit(timeLeft.days, 'Days')}
            {renderTimeUnit(timeLeft.hours, 'Hrs')}
            {renderTimeUnit(timeLeft.minutes, 'Mins')}
            {renderTimeUnit(timeLeft.seconds, 'Secs')}
          </div>
        );
    }
  };

  return (
    <div className="clock-container rounded-md p-2">
      {getClockContent()}
    </div>
  );
};

export default PlanExpiryClock;