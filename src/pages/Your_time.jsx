// import React, { useState, useEffect } from 'react';

// import "./style.css"



// const IndiaTimeClock = () => {
//     const [time, setTime] = useState('');
//     const [date, setDate] = useState('');
//     const [isFullScreen, setIsFullScreen] = useState(false);

//   useEffect(() => {
//     const updateTime = () => {
//       const optionsTime = { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
//       const optionsDate = { timeZone: 'Asia/Kolkata', day: 'numeric', month: 'long', year: 'numeric' };

//       const indiaTime = new Date().toLocaleTimeString('en-US', optionsTime);
//       const indiaDate = new Date().toLocaleDateString('en-US', optionsDate);

//       setTime(indiaTime);
//       setDate(indiaDate);

//     };

//     updateTime(); // Update immediately
//     const intervalId = setInterval(updateTime, 1000); // Update every second

//     return () => clearInterval(intervalId); 
//   }, []);


//     const toggleFullScreen = () => {
//     if (!isFullScreen) {
//       if (document.documentElement.requestFullscreen) {
//         document.documentElement.requestFullscreen();
//       } else if (document.documentElement.webkitRequestFullscreen) {
//         document.documentElement.webkitRequestFullscreen(); // Safari compatibility
//       } else if (document.documentElement.msRequestFullscreen) {
//         document.documentElement.msRequestFullscreen(); // IE11 compatibility
//       }
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       } else if (document.webkitExitFullscreen) {
//         document.webkitExitFullscreen(); // Safari compatibility
//       } else if (document.msExitFullscreen) {
//         document.msExitFullscreen(); // IE11 compatibility
//       }
//     }

//     setIsFullScreen(!isFullScreen); // Toggle state
//   };

//   return (
//     <div className='main_container'>

//             <button onDoubleClick={toggleFullScreen}
//               style={{
//                 width: '100vw', 
//                 height: '100vh', 
//                 background: 'transparent', 
//                 border: 'none', 
//                 // cursor: 'pointer'
//               }}




//             >
//         <div className='time_container'>
//             <h2 className='our_time'>{time}</h2>
//             <h3 className='our_date'>{date}</h3>
//         </div>

//       </button>
//     </div>
//   );
// };

// export default IndiaTimeClock;







// ------------- test for happy birthday at 12 am ------------

// import React, { useState, useEffect } from 'react';
// import "./style.css";
// import midnightAudio from './midnightAudio.mp3';  // Assuming you have the audio file in your project

// const IndiaTimeClock = () => {
//     const [time, setTime] = useState('');
//     const [date, setDate] = useState('');
//     const [isFullScreen, setIsFullScreen] = useState(false);
//     const audio = new Audio(midnightAudio);

//     useEffect(() => {
//         const updateTime = () => {
//             const optionsTime = { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
//             const optionsDate = { timeZone: 'Asia/Kolkata', day: 'numeric', month: 'long', year: 'numeric' };

//             const indiaTime = new Date().toLocaleTimeString('en-US', optionsTime);
//             const indiaDate = new Date().toLocaleDateString('en-US', optionsDate);

//             setTime(indiaTime);
//             setDate(indiaDate);

//             // Check if it's exactly midnight (12:00:00 AM)
//             if (indiaTime === '1:55:44 PM') {
//                 playMidnightAudio();  // Play audio at midnight
//             }
//         };

//         const playMidnightAudio = () => {
//             audio.play();  // Play the midnight audio once
//         };

//         updateTime();  // Update immediately
//         const intervalId = setInterval(updateTime, 1000);  // Update every second

//         return () => clearInterval(intervalId);  // Cleanup on component unmount
//     }, [audio]);

//     const toggleFullScreen = () => {
//         if (!isFullScreen) {
//             if (document.documentElement.requestFullscreen) {
//                 document.documentElement.requestFullscreen();
//             } else if (document.documentElement.webkitRequestFullscreen) {
//                 document.documentElement.webkitRequestFullscreen(); // Safari compatibility
//             } else if (document.documentElement.msRequestFullscreen) {
//                 document.documentElement.msRequestFullscreen(); // IE11 compatibility
//             }
//         } else {
//             if (document.exitFullscreen) {
//                 document.exitFullscreen();
//             } else if (document.webkitExitFullscreen) {
//                 document.webkitExitFullscreen(); // Safari compatibility
//             } else if (document.msExitFullscreen) {
//                 document.msExitFullscreen(); // IE11 compatibility
//             }
//         }
//         setIsFullScreen(!isFullScreen);  // Toggle state
//     };

//     return (
//         <div className='main_container'>
//             <button onDoubleClick={toggleFullScreen}
//                 style={{
//                     width: '100vw',
//                     height: '100vh',
//                     background: 'transparent',
//                     border: 'none',
//                 }}
//             >
//                 <div className='time_container'>
//                     <h2 className='our_time'>{time}</h2>
//                     <h3 className='our_date'>{date}</h3>
//                 </div>
//             </button>
//         </div>
//     );
// };

// export default IndiaTimeClock;



// ----------- aboce was just for time trigger to play audio --------
// ------ below is test to play audio and display crackers as well, at might night voi -



// import React, { useState, useEffect, useMemo } from 'react';
// import "./style.css";
// import confetti from 'canvas-confetti';  
// import midnightAudio from './midnightAudio.mp3';

// const IndiaTimeClock = () => {
//     const [time, setTime] = useState('');
//     const [date, setDate] = useState('');
//     const [isFullScreen, setIsFullScreen] = useState(false);

   
//     const audio = useMemo(() => new Audio(midnightAudio), []);

//     useEffect(() => {
//         const updateTime = () => {
//             const optionsTime = { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
//             const optionsDate = { timeZone: 'Asia/Kolkata', day: 'numeric', month: 'long', year: 'numeric' };
    
//             const indiaTime = new Date().toLocaleTimeString('en-US', optionsTime);
//             const indiaDate = new Date().toLocaleDateString('en-US', optionsDate);
    
//             setTime(indiaTime);
//             setDate(indiaDate);
    
          
//             // if (indiaTime === '12:00:00 AM' ) {
//             if (indiaTime === '12:00:00 AM' ) {
//                 playMidnightAudio();  
//                 triggerConfettiWithDelays(); 
//             }
//         };
    
//         const playMidnightAudio = () => {
//             audio.play(); 
//         };
    
       
//             const triggerConfetti = (particleCount, spread, originX, originY) => {
//                 confetti({
//                     particleCount: particleCount,
//                     spread: spread,
//                     origin: { x: originX, y: originY },  
//                 });
//             };

            
//             const triggerConfettiWithDelays = () => {
//                 triggerConfetti(500, 60, 0.2, 0.4); 
//                 setTimeout(() => triggerConfetti(300, 120, 0.8, 0.3), 800);  
//                 setTimeout(() => triggerConfetti(1000, 90, 0.5, 0.8), 1800);  
//                 setTimeout(() => triggerConfetti(700, 150, 0.3, 0.6), 2800);  
//                 setTimeout(() => triggerConfetti(400, 200, 0.7, 0.7), 3800);  
//                 setTimeout(() => triggerConfetti(300, 120, 0.8, 0.3), 800);  
//                 setTimeout(() => triggerConfetti(1000, 90, 0.5, 0.8), 1800);  
//                 setTimeout(() => triggerConfetti(700, 150, 0.3, 0.6), 2800);  
//                 setTimeout(() => triggerConfetti(400, 200, 0.7, 0.7), 3800);  
//                 setTimeout(() => triggerConfetti(500, 100, 0.1, 0.1), 4800);  // Top left
//                 setTimeout(() => triggerConfetti(600, 130, 0.9, 0.2), 5800);  // Top right
//                 setTimeout(() => triggerConfetti(450, 110, 0.5, 0.4), 6800);  // Center
//                 setTimeout(() => triggerConfetti(300, 140, 0.4, 0.9), 7800);  // Bottom left
//                 setTimeout(() => triggerConfetti(800, 160, 0.8, 0.6), 8800);  // Middle right
//                 setTimeout(() => triggerConfetti(350, 170, 0.6, 0.1), 9800);  // Top middle
//                 setTimeout(() => triggerConfetti(500, 180, 0.3, 0.5), 10800); // Center left
//                 setTimeout(() => triggerConfetti(200, 150, 0.5, 0.9), 11800); // Bottom middle
//                 setTimeout(() => triggerConfetti(450, 90, 0.7, 0.2), 12800);  // Bottom right
//                 setTimeout(() => triggerConfetti(600, 120, 0.4, 0.4), 13800); // Mid bottom
//                 setTimeout(() => triggerConfetti(300, 140, 0.9, 0.5), 14800); // Top left corner
//                 setTimeout(() => triggerConfetti(700, 100, 0.3, 0.9), 15800); // Middle left
//                 setTimeout(() => triggerConfetti(500, 150, 0.5, 0.7), 16800); // Mid top
                

//                 setTimeout(() => triggerConfetti(350, 200, 0.6, 0.3), 17800); // Middle bottom
//                 setTimeout(() => triggerConfetti(250, 170, 0.8, 0.5), 18800); // Bottom left corner
//                 setTimeout(() => triggerConfetti(800, 140, 0.5, 0.6), 19800); // Top right corner
//                 setTimeout(() => triggerConfetti(600, 80, 0.9, 0.1), 20800);  // Upper middle
//                 setTimeout(() => triggerConfetti(300, 90, 0.4, 0.9), 21800);   // Middle top left
//                 setTimeout(() => triggerConfetti(750, 130, 0.3, 0.4), 22800); // Middle top right
//                 setTimeout(() => triggerConfetti(100, 180, 0.8, 0.5), 23800); // Bottom left middle
//                 setTimeout(() => triggerConfetti(500, 100, 0.2, 0.7), 24800); // Center right
//                 setTimeout(() => triggerConfetti(450, 50, 0.4, 0.8), 25800);  // Upper center left
//                 setTimeout(() => triggerConfetti(650, 70, 0.5, 0.2), 26800);  // Upper center right
//                 setTimeout(() => triggerConfetti(100, 200, 0.6, 0.6), 27800); // Bottom left far
//                 setTimeout(() => triggerConfetti(800, 220, 0.7, 0.7), 28800); // Bottom right far
//                 setTimeout(() => triggerConfetti(550, 160, 0.4, 0.4), 29800); // Mid left middle
//                 setTimeout(() => triggerConfetti(750, 190, 0.6, 0.9), 30800); // Mid right middle
//                 setTimeout(() => triggerConfetti(400, 130, 0.5, 0.5), 31800); // Upper left
//                 setTimeout(() => triggerConfetti(550, 120, 0.8, 0.1), 32800); // Upper right
//                 setTimeout(() => triggerConfetti(200, 200, 0.7, 0.8), 33800); // Bottom left side
//                 setTimeout(() => triggerConfetti(600, 220, 0.2, 0.3), 34800); // Bottom right side
//                 setTimeout(() => triggerConfetti(500, 110, 0.4, 0.6), 35800); // Center top left
//                 setTimeout(() => triggerConfetti(500, 140, 0.3, 0.9), 36800); // Center top right
                
                 
//             };
    
//         updateTime();  
//         const intervalId = setInterval(updateTime, 1000);  
    
//         return () => clearInterval(intervalId);  
//     }, [audio]);

//     const toggleFullScreen = () => {
//         if (!isFullScreen) {
//             if (document.documentElement.requestFullscreen) {
//                 document.documentElement.requestFullscreen();
//             } else if (document.documentElement.webkitRequestFullscreen) {
//                 document.documentElement.webkitRequestFullscreen(); 
//             } else if (document.documentElement.msRequestFullscreen) {
//                 document.documentElement.msRequestFullscreen(); 
//             }
//         } else {
//             if (document.exitFullscreen) {
//                 document.exitFullscreen();
//             } else if (document.webkitExitFullscreen) {
//                 document.webkitExitFullscreen(); 
//             } else if (document.msExitFullscreen) {
//                 document.msExitFullscreen(); 
//             }
//         }
//         setIsFullScreen(!isFullScreen);  
//     };

//     return (
//         <div className='main_container'>
//             <button onDoubleClick={toggleFullScreen}
//                 style={{
//                     width: '100vw',
//                     height: '100vh',
//                     background: 'transparent',
//                     border: 'none',
//                 }}
//             >
//                 <div className='time_container'>
//                     <h2 className='our_time'>{time}</h2>
//                     <h3 className='our_date'>{date}</h3>
//                 </div>
//             </button>
//         </div>
//     );
// };

// export default IndiaTimeClock;






// ------------ aboce is working grate 0--------------- 
// ----------- below ist test to set timer ------------


import React, { useState, useEffect, useMemo } from 'react';
import './style.css';
import confetti from 'canvas-confetti';
import midnightAudio from './midnightAudio.mp3';

const IndiaTimeClock = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showTimerModal, setShowTimerModal] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [isCounting, setIsCounting] = useState(false);

  const audio = useMemo(() => new Audio(midnightAudio), []);

  useEffect(() => {
    const updateTime = () => {
      const optionsTime = {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      const optionsDate = {
        timeZone: 'Asia/Kolkata',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };

      const indiaTime = new Date().toLocaleTimeString('en-US', optionsTime);
      const indiaDate = new Date().toLocaleDateString('en-US', optionsDate);

      setTime(indiaTime);
      setDate(indiaDate);

      if (indiaTime === '4:53:55 PM') {
        playMidnightAudio();
        triggerConfettiWithDelays();
      }
    };

    const playMidnightAudio = () => {
      audio.play();
    };

    const triggerConfetti = (particleCount, spread, originX, originY) => {
      confetti({
        particleCount: particleCount,
        spread: spread,
        origin: { x: originX, y: originY },
      });
    };

    const triggerConfettiWithDelays = () => {
        triggerConfetti(500, 60, 0.2, 0.4); 
        setTimeout(() => triggerConfetti(300, 120, 0.8, 0.3), 800);  
        setTimeout(() => triggerConfetti(1000, 90, 0.5, 0.8), 1800);  
        setTimeout(() => triggerConfetti(700, 150, 0.3, 0.6), 2800);  
        setTimeout(() => triggerConfetti(400, 200, 0.7, 0.7), 3800);  
        setTimeout(() => triggerConfetti(300, 120, 0.8, 0.3), 800);  
        setTimeout(() => triggerConfetti(1000, 90, 0.5, 0.8), 1800);  
        setTimeout(() => triggerConfetti(700, 150, 0.3, 0.6), 2800);  
        setTimeout(() => triggerConfetti(400, 200, 0.7, 0.7), 3800);  
        setTimeout(() => triggerConfetti(500, 100, 0.1, 0.1), 4800);  // Top left
        setTimeout(() => triggerConfetti(600, 130, 0.9, 0.2), 5800);  // Top right
        setTimeout(() => triggerConfetti(450, 110, 0.5, 0.4), 6800);  // Center
        setTimeout(() => triggerConfetti(300, 140, 0.4, 0.9), 7800);  // Bottom left
        setTimeout(() => triggerConfetti(800, 160, 0.8, 0.6), 8800);  // Middle right
        setTimeout(() => triggerConfetti(350, 170, 0.6, 0.1), 9800);  // Top middle
        setTimeout(() => triggerConfetti(500, 180, 0.3, 0.5), 10800); // Center left
        setTimeout(() => triggerConfetti(200, 150, 0.5, 0.9), 11800); // Bottom middle
        setTimeout(() => triggerConfetti(450, 90, 0.7, 0.2), 12800);  // Bottom right
        setTimeout(() => triggerConfetti(600, 120, 0.4, 0.4), 13800); // Mid bottom
        setTimeout(() => triggerConfetti(300, 140, 0.9, 0.5), 14800); // Top left corner
        setTimeout(() => triggerConfetti(700, 100, 0.3, 0.9), 15800); // Middle left
        setTimeout(() => triggerConfetti(500, 150, 0.5, 0.7), 16800); // Mid top
        

        setTimeout(() => triggerConfetti(350, 200, 0.6, 0.3), 17800); // Middle bottom
        setTimeout(() => triggerConfetti(250, 170, 0.8, 0.5), 18800); // Bottom left corner
        setTimeout(() => triggerConfetti(800, 140, 0.5, 0.6), 19800); // Top right corner
        setTimeout(() => triggerConfetti(600, 80, 0.9, 0.1), 20800);  // Upper middle
        setTimeout(() => triggerConfetti(300, 90, 0.4, 0.9), 21800);   // Middle top left
        setTimeout(() => triggerConfetti(750, 130, 0.3, 0.4), 22800); // Middle top right
        setTimeout(() => triggerConfetti(100, 180, 0.8, 0.5), 23800); // Bottom left middle
        setTimeout(() => triggerConfetti(500, 100, 0.2, 0.7), 24800); // Center right
        setTimeout(() => triggerConfetti(450, 50, 0.4, 0.8), 25800);  // Upper center left
        setTimeout(() => triggerConfetti(650, 70, 0.5, 0.2), 26800);  // Upper center right
        setTimeout(() => triggerConfetti(100, 200, 0.6, 0.6), 27800); // Bottom left far
        setTimeout(() => triggerConfetti(800, 220, 0.7, 0.7), 28800); // Bottom right far
        setTimeout(() => triggerConfetti(550, 160, 0.4, 0.4), 29800); // Mid left middle
        setTimeout(() => triggerConfetti(750, 190, 0.6, 0.9), 30800); // Mid right middle
        setTimeout(() => triggerConfetti(400, 130, 0.5, 0.5), 31800); // Upper left
        setTimeout(() => triggerConfetti(550, 120, 0.8, 0.1), 32800); // Upper right
        setTimeout(() => triggerConfetti(200, 200, 0.7, 0.8), 33800); // Bottom left side
        setTimeout(() => triggerConfetti(600, 220, 0.2, 0.3), 34800); // Bottom right side
        setTimeout(() => triggerConfetti(500, 110, 0.4, 0.6), 35800); // Center top left
        setTimeout(() => triggerConfetti(500, 140, 0.3, 0.9), 36800); // Center top right
        
         
    };


    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [audio]);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  const handleTimerStart = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setCountdown(totalSeconds);
    setIsCounting(true);
  };

  useEffect(() => {
    let timerInterval;
    if (isCounting && countdown > 0) {
      timerInterval = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      audio.play();
      clearInterval(timerInterval);
      setIsCounting(false);
    }

    return () => clearInterval(timerInterval);
  }, [countdown, isCounting, audio]);

  const formatTime = seconds => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className='main_container'>
      <button
        onDoubleClick={toggleFullScreen}
        style={{
          width: '100vw',
          height: '100vh',
          background: 'transparent',
          border: 'none',
        }}
      >
        <div className='time_container'>
          <h2 className='our_time'>{time}</h2>
          <h3 className='our_date'>{date}</h3>
        </div>
      </button>

      <div
        className='circle_button'
        onClick={() => setShowTimerModal(!showTimerModal)}
      >
        &#x25CF;
      </div>

      {showTimerModal && (
        <div className='timer_modal'>
          <div className='timer_input'>
            <label>Hours:</label>
            <input
              type='number'
              value={hours}
              onChange={e => setHours(Number(e.target.value))}
            />
          </div>
          <div className='timer_input'>
            <label>Minutes:</label>
            <input
              type='number'
              value={minutes}
              onChange={e => setMinutes(Number(e.target.value))}
            />
          </div>
          <div className='timer_input'>
            <label>Seconds:</label>
            <input
              type='number'
              value={seconds}
              onChange={e => setSeconds(Number(e.target.value))}
            />
          </div>
          <button onClick={handleTimerStart}>Start Timer</button>
        </div>
      )}

      {isCounting && (
        <div className='countdown_display'>
          <h2>{formatTime(countdown)}</h2>
        </div>
      )}
    </div>
  );
};

export default IndiaTimeClock;




// ----------- aboce is working greate -------but looking not so god ------------- 
// ----------- below is test for good looking timmer setter -----------



// import React, { useState, useEffect, useMemo } from 'react';
// import './style.css';
// import confetti from 'canvas-confetti';
// import midnightAudio from './midnightAudio.mp3';
// import alarmAudio from './alarm_audio.mp3';

// const IndiaTimeClock = () => {
//   const [time, setTime] = useState('');
//   const [date, setDate] = useState('');
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [showTimerModal, setShowTimerModal] = useState(false);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [countdown, setCountdown] = useState(null);
//   const [isCounting, setIsCounting] = useState(false);

//   const audio_hbd = useMemo(() => new Audio(midnightAudio), []);
//   const audio_alarm = useMemo(() => new Audio(alarmAudio), []);

//   useEffect(() => {
//     const updateTime = () => {
//       const optionsTime = {
//         timeZone: 'Asia/Kolkata',
//         hour12: true,
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric',
//       };
//       const optionsDate = {
//         timeZone: 'Asia/Kolkata',
//         day: 'numeric',
//         month: 'long',
//         year: 'numeric',
//       };

//       const indiaTime = new Date().toLocaleTimeString('en-US', optionsTime);
//       const indiaDate = new Date().toLocaleDateString('en-US', optionsDate);

//       setTime(indiaTime);
//       setDate(indiaDate);

//       if (indiaTime === '3:27:15 PM') {
//         playMidnightAudio();
//         triggerConfettiWithDelays();
//       }
//     };


//     const playMidnightAudio = () => {
//         audio_hbd.play();
//     };

//     const triggerConfetti = (particleCount, spread, originX, originY) => {
//       confetti({
//         particleCount: particleCount,
//         spread: spread,
//         origin: { x: originX, y: originY },
//       });
//     };

//     const triggerConfettiWithDelays = () => {
//         triggerConfetti(500, 60, 0.2, 0.4); 
//         setTimeout(() => triggerConfetti(300, 120, 0.8, 0.3), 800);  
//         setTimeout(() => triggerConfetti(1000, 90, 0.5, 0.8), 1800);  
//         setTimeout(() => triggerConfetti(700, 150, 0.3, 0.6), 2800);  
//         setTimeout(() => triggerConfetti(400, 200, 0.7, 0.7), 3800);  
//         setTimeout(() => triggerConfetti(300, 120, 0.8, 0.3), 800);  
//         setTimeout(() => triggerConfetti(1000, 90, 0.5, 0.8), 1800);  
//         setTimeout(() => triggerConfetti(700, 150, 0.3, 0.6), 2800);  
//         setTimeout(() => triggerConfetti(400, 200, 0.7, 0.7), 3800);  
//         setTimeout(() => triggerConfetti(500, 100, 0.1, 0.1), 4800);  // Top left
//         setTimeout(() => triggerConfetti(600, 130, 0.9, 0.2), 5800);  // Top right
//         setTimeout(() => triggerConfetti(450, 110, 0.5, 0.4), 6800);  // Center
//         setTimeout(() => triggerConfetti(300, 140, 0.4, 0.9), 7800);  // Bottom left
//         setTimeout(() => triggerConfetti(800, 160, 0.8, 0.6), 8800);  // Middle right
//         setTimeout(() => triggerConfetti(350, 170, 0.6, 0.1), 9800);  // Top middle
//         setTimeout(() => triggerConfetti(500, 180, 0.3, 0.5), 10800); // Center left
//         setTimeout(() => triggerConfetti(200, 150, 0.5, 0.9), 11800); // Bottom middle
//         setTimeout(() => triggerConfetti(450, 90, 0.7, 0.2), 12800);  // Bottom right
//         setTimeout(() => triggerConfetti(600, 120, 0.4, 0.4), 13800); // Mid bottom
//         setTimeout(() => triggerConfetti(300, 140, 0.9, 0.5), 14800); // Top left corner
//         setTimeout(() => triggerConfetti(700, 100, 0.3, 0.9), 15800); // Middle left
//         setTimeout(() => triggerConfetti(500, 150, 0.5, 0.7), 16800); // Mid top
        

//         setTimeout(() => triggerConfetti(350, 200, 0.6, 0.3), 17800); // Middle bottom
//         setTimeout(() => triggerConfetti(250, 170, 0.8, 0.5), 18800); // Bottom left corner
//         setTimeout(() => triggerConfetti(800, 140, 0.5, 0.6), 19800); // Top right corner
//         setTimeout(() => triggerConfetti(600, 80, 0.9, 0.1), 20800);  // Upper middle
//         setTimeout(() => triggerConfetti(300, 90, 0.4, 0.9), 21800);   // Middle top left
//         setTimeout(() => triggerConfetti(750, 130, 0.3, 0.4), 22800); // Middle top right
//         setTimeout(() => triggerConfetti(100, 180, 0.8, 0.5), 23800); // Bottom left middle
//         setTimeout(() => triggerConfetti(500, 100, 0.2, 0.7), 24800); // Center right
//         setTimeout(() => triggerConfetti(450, 50, 0.4, 0.8), 25800);  // Upper center left
//         setTimeout(() => triggerConfetti(650, 70, 0.5, 0.2), 26800);  // Upper center right
//         setTimeout(() => triggerConfetti(100, 200, 0.6, 0.6), 27800); // Bottom left far
//         setTimeout(() => triggerConfetti(800, 220, 0.7, 0.7), 28800); // Bottom right far
//         setTimeout(() => triggerConfetti(550, 160, 0.4, 0.4), 29800); // Mid left middle
//         setTimeout(() => triggerConfetti(750, 190, 0.6, 0.9), 30800); // Mid right middle
//         setTimeout(() => triggerConfetti(400, 130, 0.5, 0.5), 31800); // Upper left
//         setTimeout(() => triggerConfetti(550, 120, 0.8, 0.1), 32800); // Upper right
//         setTimeout(() => triggerConfetti(200, 200, 0.7, 0.8), 33800); // Bottom left side
//         setTimeout(() => triggerConfetti(600, 220, 0.2, 0.3), 34800); // Bottom right side
//         setTimeout(() => triggerConfetti(500, 110, 0.4, 0.6), 35800); // Center top left
//         setTimeout(() => triggerConfetti(500, 140, 0.3, 0.9), 36800); // Center top right
        
         
//     };


//     updateTime();
//     const intervalId = setInterval(updateTime, 1000);

//     return () => clearInterval(intervalId);
//   }, [audio_hbd]);

//   const toggleFullScreen = () => {
//     if (!isFullScreen) {
//       if (document.documentElement.requestFullscreen) {
//         document.documentElement.requestFullscreen();
//       } else if (document.documentElement.webkitRequestFullscreen) {
//         document.documentElement.webkitRequestFullscreen();
//       } else if (document.documentElement.msRequestFullscreen) {
//         document.documentElement.msRequestFullscreen();
//       }
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       } else if (document.webkitExitFullscreen) {
//         document.webkitExitFullscreen();
//       } else if (document.msExitFullscreen) {
//         document.msExitFullscreen();
//       }
//     }
//     setIsFullScreen(!isFullScreen);
//   };

//   const handleTimerStart = () => {
//     const totalSeconds = hours * 3600 + minutes * 60 + seconds;
//     setCountdown(totalSeconds);
//     setIsCounting(true);
//     setShowTimerModal(false);
//   };

//   useEffect(() => {
//     let timerInterval;
//     if (isCounting && countdown > 0) {
//       timerInterval = setInterval(() => {
//         setCountdown(prev => prev - 1);
//       }, 1000);
//     } else if (countdown === 0) {
    
//         audio_alarm.play();
//       clearInterval(timerInterval);
//       setIsCounting(false);
//     }

//     return () => clearInterval(timerInterval);
//   }, [countdown, isCounting,audio_alarm]);

//   const formatTime = seconds => {
//     const hrs = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
//     return `${hrs.toString().padStart(2, '0')}:${mins
//       .toString()
//       .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className='main_container'>
//       <button
//         onDoubleClick={toggleFullScreen}
//         style={{
//           width: '100vw',
//           height: '100vh',
//           background: 'transparent',
//           border: 'none',
//         }}
//       >
//         <div className='time_container'>
//           <h2 className='our_time'>{time}</h2>
//           <h3 className='our_date'>{date}</h3>
//         </div>
//       </button>

//       <div
//         className='circle_button'
//         onClick={() => setShowTimerModal(!showTimerModal)}
//       >
//         &#x25CF;
//       </div>

//       {showTimerModal && (
//         <div className='timer_modal'>
//           <div className='timer_row'>
//             <div className='timer_input'>
//               <label>Hrs</label>
//               <input
//                 type='number'
//                 value={hours}
//                 onChange={e => setHours(Number(e.target.value))}
//                 max="23"
//                 min="0"
//               />
//             </div>
//             <div className='timer_input'>
//               <label>Min</label>
//               <input
//                 type='number'
//                 value={minutes}
//                 onChange={e => setMinutes(Number(e.target.value))}
//                 max="59"
//                 min="0"
//               />
//             </div>
//             <div className='timer_input'>
//               <label>Sec</label>
//               <input
//                 type='number'
//                 value={seconds}
//                 onChange={e => setSeconds(Number(e.target.value))}
//                 max="59"
//                 min="0"
//               />
//             </div>
//           </div>
//           <button  className = 'Set_timer_btn' onClick={handleTimerStart}>Start Timer</button>
//         </div>
//       )}



//       {isCounting && (
//         <div className='countdown_display'>
//           <h2>{formatTime(countdown)}</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IndiaTimeClock;






// // ------------- above is working great for confitte at differet location and with diff arguments ------
// // ----------- below ist est to solve user interaction first wala problem 0o-------

