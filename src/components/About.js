import React, { useEffect } from "react";
import {
  Avatar,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import history from "../assets/history.svg";
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingRight: "5em",
    paddingLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "1.5em",
      paddingLeft: "1.5em",
    },
  },
  avatar: {
    height: "22em",
    width: "22em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: "300px",
      maxWidth: "300px",
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  return (
    <Grid container direction="column">
      <ScrollToTopOnMount />
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography align={matchesMD ? "center" : undefined} variant="h2">
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Amp Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src={history}
              alt="quill pen sitting on top of book"
              style={{ maxHeight: matchesMD ? 200 : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Development Approaches We Follow
          </Typography>
        </Grid>
        <Grid item style={{ marginBottom: "1em" }}>
          <Avatar
            alt="agile"
            src="https://res.cloudinary.com/joeutd/image/upload/v1638906851/arc/aboutus/agile2_a5lqtq.png"
            className={classes.avatar}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" paragraph align="center" color="primary">
            Agile
          </Typography>
        </Grid>
        <Grid item container justify={matchesMD ? "center" : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                The Agile methodology allows us to release reliable software
                fast and introduce changes easily. The development process
                consists of 1-4 week iterations resulting in an evolved version
                of software shipped each time.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                {" "}
                After each iteration, we get real user feedback that drives
                informed decisions on the next development steps.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : undefined}
            style={{ marginBottom: matchesMD ? "2.5em" : 0 }}
          >
            <Grid item style={{ marginBottom: "1em" }}>
              <Avatar
                alt="devops"
                src="https://res.cloudinary.com/joeutd/image/upload/v1638907588/arc/aboutus/devopsog_utoktw.svg"
                className={classes.avatar}
              />
            </Grid>

            <Grid item style={{ marginLeft: matchesMD ? undefined : "2em" }}>
              <Typography
                variant="h5"
                paragraph
                align={matchesMD ? "center" : "left"}
                color="primary"
              >
                DevOps
              </Typography>
            </Grid>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                With an established DevOps culture at Amp Development, we
                streamline software delivery and improve its quality with the
                following DevOps best practices:
              </Typography>

              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                <Typography color="primary" component="span">
                  Infrastructure as Code (IaC):
                </Typography>
                automating the creation of new infrastructures and keeping them
                consistent with each other to ensure smooth software deployment.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                <Typography color="primary" component="span">
                  Continuous Integration/Continuous Delivery or Continuous
                  Deployment (CI/CD):
                </Typography>
                automating integration and deployment of code changes.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                <Typography color="primary" component="span">
                  Automated testing:
                </Typography>
                automating regression, performance, and other types of testing
                that are continuously carried out within the CI/CD pipeline.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                <Typography color="primary" component="span">
                  Application performance monitoring:
                </Typography>
                configuring application performance monitoring tools to detect
                post-release bugs quickly.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                The Agile methodology allows us to release reliable software
                fast and introduce changes easily. The development process
                consists of 1-4 week iterations resulting in an evolved version
                of software shipped each time.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                {" "}
                After each iteration, we get real user feedback that drives
                informed decisions on the next development steps.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : "flex-end"}
          >
            <Grid item style={{ marginBottom: "1em" }}>
              <Avatar
                alt="founder"
                src="https://res.cloudinary.com/joeutd/image/upload/v1638906679/arc/aboutus/modular_akhkvc.svg"
                className={classes.avatar}
              />
            </Grid>

            <Grid item style={{ marginRight: matchesMD ? undefined : "2em" }}>
              <Typography
                variant="h5"
                paragraph
                align={matchesMD ? "center" : "right"}
                color="primary"
              >
                Modular architecture
              </Typography>
            </Grid>

            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "right"}
                paragraph
              >
                We use modular architecture patterns, such as microservices, in
                combination with containers to develop applications as a suite
                of independent functional components that can be effortlessly
                ported to any environment.{" "}
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "right"}
                paragraph
              >
                Such an approach ensures higher application reliability, better
                maintainability and expandability, as well as shorter
                development time.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
