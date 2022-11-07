import React, { useEffect, useState } from "react";
import { Container, Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  module_img: {
    height: 350,
    width: "50%",
  },
  paper: {
    marginTop: 10,
    marginBottom: 10,
  },
  status: {
    width: 350,
    height: 100,
    backgroundColor: "#eeeeee66",
    padding: 18,
  },
  instruction_heading: {
    marginTop: 5,
    marginBottom: 5,
  },
  card: {
    backgroundColor: "#eeeeee66",
  },
});
export const Result = (props) => {
  //const { state } = useLocation();
  const location = useLocation();
  console.log("props", location.state.tuts);
  let res = location.state.tuts;

  const classes = useStyles();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [score, setScore] = useState(0);

  const msToTime = (s) => {
    function pad(n, z) {
      z = z || 2;
      return ("00" + n).slice(-z);
    }
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return pad(hrs) + ":" + pad(mins) + ":" + pad(secs);
  };

  useEffect(() => {
    let time = localStorage.getItem("elaspedTime");
    setElapsedTime(msToTime(time));

    let mark = localStorage.getItem("score");
    setScore(mark);
  }, []);

  return (
    <Container>
      <Stack direction={"column"} alignItems="center" my={15} spacing={3}>
        <Paper elevation={3} className={classes.status}>
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems="center"
            my={4}
            spacing={2}
          >
            <Typography
              sx={{ fontSize: "30px", color: "#16435e", fontWeight: "900" }}
            >
              Time Taken : {elapsedTime}
            </Typography>
          </Stack>
        </Paper>
        <Paper elevation={1} className={classes.status}>
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems="center"
            my={4}
            spacing={2}
          >
            <Typography
              sx={{ fontSize: "30px", color: "#16435e", fontWeight: "900" }}
            >
              Marks : {score * 5}
            </Typography>
          </Stack>
        </Paper>
      </Stack>

      <Paper elevation={3} className={classes.paper}>
        <Stack
          direction={"column"}
          justifyContent="center"
          spacing={2}
          padding={2}
        >
          <Typography
            sx={{ fontSize: "35px", color: "#16435e", fontWeight: "600" }}
          >
            Learning Resources
          </Typography>
          {res.map((e) => (
            <Stack
              direction={"row"}
              height={100}
              alignItems="center"
              className={classes.card}
            >
              <a href={e} target="_blank" rel="noreferrer">
                {" "}
                {e}{" "}
              </a>
            </Stack>
          ))}
        </Stack>
      </Paper>
    </Container>
  );
};

export default Result;
