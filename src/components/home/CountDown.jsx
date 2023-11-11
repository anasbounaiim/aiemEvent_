import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Countdown = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endDate = moment('25/11/2023', 'DD/MM/YYYY');
    const now = moment();

    const duration = moment.duration(endDate.diff(now));

    const interval = setInterval(() => {
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setCountdown({ days, hours, minutes, seconds });

      if (duration.asMilliseconds() <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        duration.subtract(1, 's');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>L'ÉVÉNEMENT COMMENCE EN ...</h1>
     <div className='mt-3 flex flex-col lg:flex-row gap-4 row-end-2'>
        <div className='flex flex-row gap-4'>
        <span className='flex shadow-md flex-col items-center bg-white w-24 h-24 justify-center rounded-lg text-xl text-[#484494] font-custom1 font-black'>
            <span className='text-4xl font-bold'>{countdown.days}</span> 
            <span>Days</span>
        </span>
        <span className='flex shadow-md flex-col items-center bg-white w-24 h-24 justify-center rounded-lg text-xl text-[#484494] font-custom1 font-black'>
            <span className='text-4xl font-bold'>{countdown.hours}</span> 
            <span>Hours</span>
        </span>
        </div>
        <div className='flex flex-row gap-4'>
        <span className='flex shadow-md flex-col items-center bg-white w-24 h-24 justify-center rounded-lg text-xl text-[#484494] font-custom1 font-black'>
            <span className='text-4xl font-bold'>{countdown.minutes}</span> 
            <span>Minutes</span>
        </span>
        <span className='flex shadow-md flex-col items-center bg-white w-24 h-24 justify-center rounded-lg text-xl text-[#484494] font-custom1 font-black'>
            <span className='text-4xl font-bold'>{countdown.seconds}</span> 
            <span>Seconds</span>
        </span>
        </div>
     </div>
   
    </div>
  );
};

export default Countdown;
