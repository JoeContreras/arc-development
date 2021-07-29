import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import animationData from "../animations/landinganimation/data";
import { Button, Grid, Typography } from "@material-ui/core";
import ButtonArrow from "./ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "25em",
    marginTop: "2em",
    marginLeft: "10%",
  },
}));
export default function LandingPage() {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology <br />
              to the Midwest
            </Typography>
            <Grid container direction="row">
              <Grid item>
                <Button variant="contained">
                  Free Estimate
                  <ButtonArrow height={15} width={15} fill="red" />
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Learn More</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            {/*<Lottie options={defaultOptions} height={"100%"} width={"100%"} />*/}
            dfd
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
