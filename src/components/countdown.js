import "../App.css";
import {useEffect,useState} from 'react';

export default function Countdown({targetDate}){
    function calculateTimeLeft(targetDate){
        const difference = targetDate - new Date();
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);   
        return {days,hours,minutes,seconds};
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, [targetDate]);
    return (
        <>
        <div className="countdown">
          <p className="seeu">see you in</p>
          <p className="counttime ">{timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}</p>
          <p className="labels">days&emsp;&emsp;&nbsp;hrs&emsp;&emsp;&nbsp;mins&emsp;&emsp;&nbsp;sec</p>
        </div>
        </>
    );
}

