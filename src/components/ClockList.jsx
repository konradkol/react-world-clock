/* eslint-disable react/prop-types */
import { Clock } from './Clock';

export const ClockList = ({ arr, removeTimeZone }) => {
  return (
    <div>
      {arr?.map((el) => (
        <div key={el.id}>
          <Clock utc={el.value} />
          <button onClick={() => removeTimeZone(el.id)}>Usuń</button>
        </div>
      ))}
    </div>
  );
};
