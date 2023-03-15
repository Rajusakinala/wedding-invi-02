import React from "react";
import CountDown from "count-down-react";
import "./styles.css";

const CoundownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <div className="container">
      {/* <h2>Countdown</h2> */}
      <ul>
        <li>
          <span id="days">{days}</span>days
        </li>
        <li>
          <span id="hours">{hours}</span>Hours
        </li>
        <li>
          <span id="minutes">{minutes}</span>Minutes
        </li>
        <li>
          <span id="seconds">{seconds}</span>Seconds
        </li>
      </ul>
    </div>
  );
};

// const CoundownMinutes = ({ days, hours, minutes, seconds, completed }) => {
//   return (
//     <div className="container">
//       <h1>Count Down Advanced</h1>
//       <p>The updateFrequency is 5 seconds till 10 minutes and then 1 second.</p>
//       <ul>
//         <li>
//           <span id="minutes">{minutes}</span>Minutes
//         </li>
//         {/* {minutes < 10 && ( */}
//         <li>
//           <span id="seconds">{seconds}</span>Seconds
//         </li>
//         {/* )} */}
//       </ul>
//     </div>
//   );
// };

export default function Countdown() {
  //   const date1 = Date.now() + 24 * 60 * 60 * 1000;
  const date1 = new Date("2023-03-17T11:30:00");
  const date2 = Date.now() + 615 * 1000;
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <CountDown date={date1} renderer={CoundownRenderer} />
      {/* <CountDown
        date={date2}
        renderer={CoundownMinutes}
        updateFrequency={({ minutes, seconds }) =>
          minutes * 60 + seconds > 600 ? 5000 : 1000
        }
      /> */}
    </div>
  );
}
