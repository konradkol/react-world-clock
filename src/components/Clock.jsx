/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { formatInTimeZone } from 'date-fns-tz';

export const Clock = ({ utc }) => {
  const time = () => formatInTimeZone(new Date(), utc, 'HH:mm:ss');
  const [actualTime, setActualTime] = useState(time);

  useEffect(() => {
    const intervalId = setInterval(() => setActualTime(time), 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <div>
      UTC{utc?.slice(0, 3)}: {actualTime}
    </div>
  );
};
