import React, { useState, useEffect } from 'react';
import { formatDistanceStrict } from 'date-fns';
import { uk } from 'date-fns/locale';

function Timer({date}:Readonly<{date:Date}>) {
  const [difference, setDefference]:any = useState("");

  useEffect(() => {
    let result = formatDistanceStrict(new Date(),date, { locale: uk})
        setDefference(result);
  }, []);

  return (
    <p>{difference}</p>
  );
}

export default Timer;