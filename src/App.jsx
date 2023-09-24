import { useState } from 'react';
import { TimezoneSelector } from './components/TimezoneSelector';
import { ClockList } from './components/ClockList';
import './App.css';

function App() {
  const [arrWithTimeZones, setArrWithTimeZones] = useState([]);
  console.log(arrWithTimeZones);

  const removeTimeZone = (id) => {
    setArrWithTimeZones(arrWithTimeZones.filter((el) => el.id !== id));
    console.log(arrWithTimeZones, id);
  };

  return (
    <div>
      <TimezoneSelector setArray={setArrWithTimeZones} />
      <ClockList arr={arrWithTimeZones} removeTimeZone={removeTimeZone} />
    </div>
  );
}

export default App;
