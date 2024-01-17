import React, { useState, useEffect } from "react";

  const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect( () => { 

    const interval = setInterval( () => {
      setTime( new Date() )
    }, 1000 )

    return () => {
      clearInterval(interval);
    }
  })


  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div>
      <div>{`${hours}:${minutes}:${seconds}`}</div>
    </div>
  );
};

export default Clock;