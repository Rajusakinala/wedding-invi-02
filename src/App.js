import "./App.css";
import React, { useState } from "react";
import ParticleBackground2 from "./componets/PartcleBackground2";
import ParticleBackground from "./componets/ParticleBackground";
import { Grid, Box, Button } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Countdown from "./countDown/counter";
function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="App">
      <div className="raju">
        {/* <ParticleBackground /> */}
        {/* <ParticleBackground2 /> */}
        <div>
          {/* <h2>Wedding Invitation of SAKIANALA's Family</h2> */}
          {/* <h2>Your invited to the wedding of SAKIANALA's Family</h2> */}
          <h1>Your invited to the wedding of Srikanth And Radhika</h1>
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

                <Grid item>
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
              <img src="/set1/couple.jpg" alt="couple" />
              <img src="/set1/couple.jpg" alt="couple" />
              <img src="/set1/couple.jpg" alt="couple" />
            </Grid>
            <Grid item xs={12}>
              <h1>
                We are heartly inviting you to attend this happiness along with
                our families.
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
                <Grid container justifyContent="center">
                  <Grid
                    item
                    xs={12}
                    style={{ borderBottom: "2px solid white" }}
                  >
                    <AccessTimeIcon />
                    <h4 style={{ marginTop: "0px" }}>
                      Time: <span>11:30Am Vrushabha Lagnam</span>
                    </h4>
                  </Grid>

                  <Grid item xs={12}>
                    <CalendarMonthIcon />
                    <h4 style={{ marginTop: "0px" }}>
                      Date: <span>17rd mar 2023</span>
                      <span>Friday</span>
                    </h4>
                  </Grid>
                </Grid>
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
                <hr />
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
            {/* Location */}

            <Grid item xs={12} className="location">
              <div style={{ textAlign: "left" }}>
                <hr />
                <h2>Wedding location:</h2>
                <hr />
                <h4>M.J. Garden Function Hall</h4>
              </div>
              <iframe
                title="googleMap"
                id="googleMap"
                src={`https://maps.google.com/maps?q=${"17.853922"},${"79.376349"}&hl=es;&output=embed`}
                // src="https://www.google.com/maps/place/Maa+Garden+Function+Hall/@,79.3763491,17z/data=!4m6!3m5!1s0x3bccacaa61216f41:0x84e1f73d36863c2!8m2!3d17.853847!4d79.3769754!16s%2Fg%2F1hm4g6vr9?hl=es;&output=embed"
                width="100%"
                height="500px"
              ></iframe>
            </Grid>
            {/* Best Blessings by */}
            <Grid item xs={12}>
              <h4> With Best Complements from: NEAR And DEARS.</h4>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
