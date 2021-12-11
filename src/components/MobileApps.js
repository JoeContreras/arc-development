import React, { useEffect } from "react";
import Lottie from "react-lottie";
import {
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import integrationAnimation from "../animations/integrationAnimation/data";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingRight: "5em",
    paddingLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "1.5em",
      paddingLeft: "1.5em",
    },
  },
}));

const MobileApps = (props) => {
  const { setSelectedIndex, setValue } = props;
  const theme = useTheme();
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
        container
        direction="row"
        className={classes.rowContainer}
        justifyContent={matchesMD ? "center" : undefined}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginLeft: "-3.5em", marginRight: "1em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/customsoftware"
              onClick={() => {
                setSelectedIndex(0);
              }}
            >
              <img src={backArrow} alt="Back to custom software" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid
          item
          container
          direction="column"
          className={classes.heading}
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography variant="h2" gutterBottom>
              Desarrollo iOS/Android
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Las aplicaciones móviles te permiten llevar tus herramientas sobre
              la marcha.
            </Typography>
            <Typography variant="body1" paragraph>
              Ya sea que quieras una aplicación para tus clientes, tus empleados
              o para ti mismo, podemos construir soluciones nativas
              multiplataforma para cualquier parte de tu proceso de negocio.
              Esto te abre todo un mundo nuevo aprovechando las características
              de tu teléfono como la cámara, el GPS, las notificaciones push y
              mucho más.
            </Typography>
            <Typography variant="body1" paragraph>
              Comodidad. Conexión
            </Typography>
            <Typography variant="body1" paragraph>
              Creamos exactamente lo que quieres, exactamente como lo quieres.
            </Typography>
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/websites"
              onClick={() => {
                setSelectedIndex(2);
              }}
            >
              <img src={forwardArrow} alt="Forward to websites Development" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesSM ? "column" : "row"}
        style={{ marginBottom: "15em", marginTop: "15em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          align={matchesSM ? "center" : undefined}
        >
          <Grid item>
            <Typography variant="h4">Integración</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Nuestra tecnología permite una interconexión intrínseca entre las
              aplicaciones web y móviles, poniendo todo lo que necesitas en un
              solo lugar.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Esto te permite ampliar tu alcance, reinventar las interacciones y
              desarrollar una relación más fuerte que nunca con tus usuarios.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: "20em" }} />
        </Grid>

        <Grid
          item
          container
          direction="column"
          md
          align={matchesSM ? "center" : "right"}
        >
          <Grid item>
            <Typography variant="h4">
              Soporte de plataformas simultáneas
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Nuestro proceso vanguardista de desarrollo nos permite crear
              aplicaciones para iPhone, Android y tabletas, todo al mismo
              tiempo.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Esto reduce significativamente los costes y crea una experiencia
              de marca más unificada en todos los dispositivos.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        align="center"
        style={{ marginBottom: "15em" }}
      >
        <Grid item container direction="column" md alignItems="center">
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Ampliar la Funcionalidad
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="Swiss army knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Ampliar el Acceso
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt="access"
              style={{ maxWidth: matchesXS ? "20em" : "28em" }}
            />
          </Grid>
        </Grid>

        <Grid item container direction="column" md alignItems="center">
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Aumentar el Compromiso
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="App with notification" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
