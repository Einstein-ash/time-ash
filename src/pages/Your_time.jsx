import React, { useState, useEffect } from 'react';
import "./style.css"



const IndiaTimeClock = () => {
    const [time, setTime] = useState('');
    const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
      const indiaTime = new Date().toLocaleTimeString('en-US', options);
      setTime(indiaTime);
    };

    updateTime(); // Update immediately
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); 
  }, []);


    const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(); // Safari compatibility
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen(); // IE11 compatibility
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Safari compatibility
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE11 compatibility
      }
    }

    setIsFullScreen(!isFullScreen); // Toggle state
  };

  return (
    <div className='main_container'>

        <div className='our_time'>
            {/* <h1>Current Time in India:</h1> */}
            <h2 className='our_time'>{time}</h2>

            <button onClick={toggleFullScreen}>
        {isFullScreen ? 'Exit Full Screen' : 'Go Full Screen'}
      </button>
        </div>
    </div>
  );
};

export default IndiaTimeClock;
