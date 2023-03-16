import "./App.css";
import React, { useState, useEffect } from "react";
import ParticleBackground2 from "./componets/PartcleBackground2";
import ParticleBackground from "./componets/ParticleBackground";
import { Grid, Box, Button } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Countdown from "./countDown/counter";
import { useSpeechSynthesis } from "react-speech-kit";

function App() {
  const { speak } = useSpeechSynthesis();
  const [value, onChange] = useState(new Date());
  useEffect(() => {
    // document.getElementById("adi").play();
    document.getElementById("vid").play();
  }, []);
  return (
    <div className="App">
      <div className="raju">
        {/* <ParticleBackground /> */}
        {/* <ParticleBackground2 /> */}
        <div>
          {/* <h2>Wedding Invitation of SAKIANALA's Family</h2> */}
          {/* <h2>Your invited to the wedding of SAKIANALA's Family</h2> */}
          <h1
            onMouseOver={() =>
              speak({
                text: "your heartly invited to the wedding of  Sreekanth And Raadhika",
              })
            }
            onMouseEnter={() =>
              // window.speechSynthesis.speak(msg);

              speak({
                // text: "your heartly invited to the wedding of Rom And Unnusa",
                text: "your heartly invited to the wedding of Sreekanth And Raadhika",
              })
            }
            onClick={
              () =>
                speak({
                  text: "your heartly invited to the wedding of  Sreekanth And Raadhika",
                })
              // setSpeechText("najja bhaga jajara")
            }
          >
            Your invited to the wedding of Srikanth And Radhika
          </h1>
        </div>
        <hr />
        <div>
          <Grid container spacing={3}>
            {/* About BOth*/}
            <Grid item className="ccc" p={0} xs={12}>
              <Grid
                className="ccc"
                container
                display="flex"
                // flexDirection="row"
                justifyContent="space-around"
                // style={{ margin: "auto 60px" }}
              >
                <Grid item className="borde">
                  {/* <div> */}
                  <img src="/set1/bride.jpg" alt="bride" />
                  <h2>Bride: Radhika</h2>
                  <h5>
                    <span>D/o Maka Anjamma and Anjaneyulu</span>
                  </h5>
                  {/* </div> */}
                </Grid>

                <Grid
                  item
                  onMouseOver={() =>
                    speak({
                      text: "your heartly invited to the wedding of  Sreekanth And Raadhika",
                    })
                  }
                  onMouseEnter={() =>
                    // window.speechSynthesis.speak(msg);

                    speak({
                      // text: "your heartly invited to the wedding of Rom And Unnusa",
                      text: "your heartly invited to the wedding of Sreekanth And Raadhika",
                    })
                  }
                  onClick={
                    () =>
                      speak({
                        text: "your heartly invited to the wedding of  Sreekanth And Raadhika",
                      })
                    // setSpeechText("najja bhaga jajara")
                  }
                >
                  {/* <div> */}
                  <img src="/set1/groom.jpg" alt="bride" />
                  <h2>Groom: Srikanth Yadav</h2>
                  <h5>
                    <span>D/o Kavati Laxmi and BandariKomuraiah</span>
                  </h5>
                  {/* </div> */}
                </Grid>
              </Grid>
              <hr />
              <h2>Photo Gallary</h2>
              <hr />
            </Grid>
            <hr />
            <Grid item xs={12}>
              <img src="/set1/couple1.jpg" alt="couple" />
              <img src="/set1/couple2.jpg" alt="couple" />
              <img src="/set1/couple3.jpg" alt="couple" />
            </Grid>
            <Grid item xs={12}>
              <h1>
                We are heartly inviting you to attend this happiness along with
                families.
              </h1>
            </Grid>

            {/* Engagement info */}
            {/* <Grid item></Grid> */}
            {/* Wedding info */}
            <Grid item xs={12}>
              <hr />
              <h2>Sumuhurtham</h2>
              <hr />

              <div
                style={{
                  width: "300px",
                  // height: "320px",
                  // border: "2px solid blue",
                  margin: "auto",
                }}
              >
                {/* <h2>Wedding Time & Date</h2> */}
                {/* <h2>Sumuhurtham</h2> */}
                {/* <hr /> */}
                {/* <Grid container justifyContent="center"> */}
                {/* <Grid item xs={12} style={{}}> */}
                <AccessTimeIcon />
                <h4 style={{ marginTop: "0px" }}>
                  Time: <span>11:30Am Vrushabha Lagnam</span>
                </h4>
                <hr />
                {/* </Grid> */}

                {/* <Grid item xs={12}> */}
                <CalendarMonthIcon />
                <h4 style={{ marginTop: "0px" }}>
                  Date: <span>17rd mar 2023</span>
                  <span>Friday</span>
                </h4>
                {/* </Grid> */}
                {/* </Grid> */}
                <hr />
                <h4>
                  Venue:
                  <span>M.J. Gardens Function Hall</span>
                </h4>
                <h5>
                  <span>
                    Shapur Nager Main Road, Opp. Hanuman Temple, Shapur Nagar
                  </span>
                </h5>
                {/* <small>
                  <code>Google location attached at bellow</code>
                </small> */}
                {/* <hr /> */}
              </div>
              {/* <Calendar onChange={onChange} value={value} /> */}
            </Grid>
            {/* Count down */}
            <Grid item xs={12}>
              <hr />
              <h2>Countdown</h2>
              <hr />
              <Countdown />
            </Grid>
            {/* invi video */}

            <Grid item xs={12} className="location">
              <div style={{ textAlign: "left" }}>
                <hr />
                <h2>Wedding invitation video:</h2>
                <hr />
                {/* <h4>M.J. Garden Function Hall</h4> */}
              </div>
              <video
                width="100%"
                loop="true"
                autoplay="autoplay"
                controls="controls"
                id="vid"
                // muted
              >
                <source src="/set1/SrikanthWedsRajitha.mp4" type="video/mp4" />
                <source src="/set1/SrikanthWedsRajitha.mp4" type="video/ogg" />
              </video>
              {/* <iframe
                title="googleMap"
                id="googleMap"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                width="100%"
                height="500px"
              ></iframe> */}
            </Grid>
            {/* Location */}

            <Grid item xs={12} className="location">
              <div style={{ textAlign: "left" }}>
                <hr />
                <h2>Wedding location:</h2>
                <hr />
                <h4>M.J. Garden Function Hall</h4>
                <a href="https://www.google.com/maps/place/M.J..Gardens/@17.5171545,78.4435703,17z/data=!4m14!1m7!3m6!1s0x3bcb905d474305df:0x9a8353e9c1f22cce!2sM.J..Gardens!8m2!3d17.5171545!4d78.445759!16s%2Fg%2F11b87crqfn!3m5!1s0x3bcb905d474305df:0x9a8353e9c1f22cce!8m2!3d17.5171545!4d78.445759!16s%2Fg%2F11b87crqfn">
                  Get directions
                </a>
              </div>
              <iframe
                title="googleMap"
                id="googleMap"
                // src={`https://maps.google.com/maps?q=${"17.853922"},${"79.376349"}&hl=es;&output=embed`}
                src={`https://maps.google.com/maps?q=17.5171545,78.4435703&hl=es;&output=embed`}
                width="100%"
                height="500px"
              ></iframe>
            </Grid>
            {/* Best Blessings by */}
            <Grid item xs={12}>
              <h4> With Best Complements from: NEAR And DEARS.</h4>
            </Grid>
            <Grid item xs={12}>
              <audio id="adi" controls loop autoplay>
                <source src="/set1/master.ogg" type="audio/ogg" />
                <source src="/set1/master.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
