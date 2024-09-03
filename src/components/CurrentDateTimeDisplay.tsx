import { useState, useEffect } from 'react';

const CurrentDateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatter = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  return (
    <div className="fixed bottom-2 right-2 bg-gray-800 bg-opacity-10 text-lavender text-sm font-sans p-1 rounded">
      {formatter.format(dateTime)}
    </div>
  );
};

export default CurrentDateTimeDisplay;