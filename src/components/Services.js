import React, { useEffect } from "react";
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import ButtonArrow from "./ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom_Software_Icon.svg";
import mobileappsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import { useTheme } from "@material-ui/core/styles";
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "pacifico",
    color: theme.palette.common.orange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    marginTop: "1.5em",
    height: 35,
    padding: 5,
    "& span": {
      marginLeft: ".5em",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "8em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { setValue, setSelectedIndex } = props;

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
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          align={matchesSM ? "center" : undefined}
          variant="h2"
          gutterBottom
        >
          Servicios
        </Typography>
      </Grid>
      {/*-----iOS/Android App Block-----*/}
      <Grid
        container
        direction="row"
        className={classes.serviceContainer}
        justifyContent={matchesSM ? "center" : "flex-end"}
        style={{ marginTop: matchesSM ? "1em" : "5em" }}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? "center" : undefined,
            width: matchesSM ? undefined : "35em",
          }}
        >
          <Typography variant="h4">
            Desarrollo de aplicaciones iOS/Android
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Mejore la funcionalidad. Mejore el acceso. Mejore el compromiso.
          </Typography>
          <Typography variant="subtitle1">
            Integre su experiencia web o cree una aplicación independiente con
            cualquiera de las plataformas móviles.
          </Typography>
          <Button
            component={Link}
            to="/mobileapps"
            variant="outlined"
            className={classes.learnButton}
            onClick={() => {
              setValue(1);
              setSelectedIndex(2);
            }}
          >
            <span style={{ marginRight: 10 }}>Leer más</span>
            <ButtonArrow
              height={10}
              width={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid
          item
          style={{
            // marginTop: matchesXS ? undefined : "1.5em",
            marginRight: matchesSM ? 0 : "5em",
          }}
        >
          <img
            src={mobileappsIcon}
            alt="mobile Development"
            className={classes.icon}
            width="250em"
          />
        </Grid>
      </Grid>

      {/*-----Custom Software Block-----*/}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">
              Desarrollo de software a medida
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Ahorra energía. Ahorra tiempo. Ahorra dinero.
            </Typography>
            <Typography variant="subtitle1">
              Soluciones digitales completas, desde la investigación hasta la{" "}
              <span className={classes.specialText}>celebración.</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Leer más</span>
              <ButtonArrow
                height={10}
                width={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={customSoftwareIcon}
              alt="custom software"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*-----Websites Block-----*/}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : "flex-end"}
          style={{ marginBottom: "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Desarrollo Web</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Alcance más. Descubra más. Venda más.
            </Typography>
            <Typography variant="subtitle1">
              Optimizado para los motores de búsqueda, construido para la
              velocidad.
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Leer más</span>
              <ButtonArrow
                height={10}
                width={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              src={websitesIcon}
              alt="websites Development"
              className={classes.icon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} />
    </Grid>
  );
};
export default Services;
