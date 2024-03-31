import React from 'react';


const Timezone = ({ timestamp }) => {
  // Convert UTC timestamp to local time
  const convertTimestampToReadableTime = (timestamp) => {
    // Create a new Date object with the UTC timestamp
    const dateObject = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

    // Format the time
    const formattedTime = dateObject.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    return formattedTime;
  };

  // Check if timestamp is valid
  if (!isNaN(timestamp)) {
    const readableTime = convertTimestampToReadableTime(timestamp);
    return (
      <div>
        <p className='time' style={{color:"white"}}>{readableTime}</p>
      </div>
    );
  } else {
    return <p >Invalid timestamp</p>;
  }
};

export default Timezone;
