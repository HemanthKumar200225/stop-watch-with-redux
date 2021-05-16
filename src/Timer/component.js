import React from 'react';

export const Component = ({ time, handleStartClick, handleLapClick, handleStopClick, handleResetClick }) => (
  <div>
    <h1 className="TimeDisplay">{time}</h1>
    <button onClick={handleStartClick}>Start</button>
    <button onClick={handleLapClick}>Lap</button>
    <button onClick={handleStopClick}>Stop</button>
    <button onClick={handleResetClick}>Reset</button>
    {/* {lap.map((Lap) => {
                return (
                  <li>
                    <h4>{Lap}</h4>
                  </li>
                );
    })} */}
  </div>
);
