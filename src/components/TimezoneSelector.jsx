/* eslint-disable react/prop-types */
import { useState } from 'react';

export const TimezoneSelector = ({ setArray }) => {
  const [selectedTZ, setSelectedTZ] = useState('+00:00');

  const arrWithAvailableTZ = [
    '-04:00',
    '-03:00',
    '-02:00',
    '-01:00',
    '+00:00',
    '+01:00',
    '+02:00',
    '+03:00',
    '+04:00',
  ];

  const addTZToArray = (setArrWithTimeZones) => {
    setArrWithTimeZones((prev) => [
      ...prev,
      { value: selectedTZ, id: Math.random() },
    ]);
  };

  console.log(selectedTZ);
  return (
    <div>
      <select
        defaultValue={'+00:00'}
        onChange={(e) => setSelectedTZ(e.target.value)}
      >
        {arrWithAvailableTZ.map((tz) => (
          <option key={tz} value={tz}>
            UTC{tz}
          </option>
        ))}
      </select>
      <button onClick={() => addTZToArray(setArray)}>Dodaj</button>
    </div>
  );
};
