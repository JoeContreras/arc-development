import React, { useEffect } from "react";
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
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";
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
  itemContainer: {
    maxWidth: "40em",
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

export default function Websites(props) {
  const { setSelectedIndex, setValue } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

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
              to="/mobileapps"
              onClick={() => {
                setSelectedIndex(1);
              }}
            >
              <img src={backArrow} alt="Back to Mobile Development" />
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
              Desarrollo Web
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Tener un sitio web es una necesidad en el mundo empresarial
              actual. Te dan una ubicación central y pública para que la gente
              sepa quién eres, lo que haces y por qué eres el mejor en ello.
            </Typography>
            <Typography variant="body1" paragraph>
              Desde el simple hecho de publicar su horario hasta tener una
              tienda online completa, hacerse accesible a los posibles usuarios
              impulsa el crecimiento y le permite llegar a nuevos clientes.
            </Typography>
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/course"
              onClick={() => {
                setSelectedIndex(3);
              }}
            >
              <img src={forwardArrow} alt="Forward to services" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item align={matchesSM ? "center" : undefined}>
              <Typography variant="h4" gutterBottom>
                Análisis
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                alt="Analytics"
                style={{ marginLeft: "-2.75em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          align={matchesSM ? "center" : undefined}
        >
          <Typography variant="body1">
            El conocimiento es poder, y los datos son el oro del siglo XXI. El
            análisis de estos datos puede revelar patrones y tendencias ocultas
            en tu negocio, permitiéndote tomar decisiones más inteligentes con
            efectos medibles.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        justifyContent="flex-end"
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item align={matchesSM ? "center" : undefined}>
              <Typography variant="h4" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt="Dollar signs" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? "0" : "1em" }}
          className={classes.paragraphContainer}
          align={matchesSM ? "center" : undefined}
        >
          <Typography variant="body1" paragraph>
            No es ningún secreto que a la gente le gusta comprar online.
          </Typography>
          <Typography variant="body1" paragraph>
            En 2017 se gastaron más de 2,3 billones en comercio electrónico, y
            ha llegado el momento de que te toque tu parte de ese pastel.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item align={matchesSM ? "center" : undefined}>
              <Typography variant="h4" gutterBottom>
                Alcance
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="Outreach" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? "0" : "1em" }}
          className={classes.paragraphContainer}
          align={matchesSM ? "center" : undefined}
        >
          <Typography variant="body1">
            Atrae a la gente con un sitio web deslumbrante. Mostrar tus
            productos en línea es una excelente manera de ayudar a los clientes
            a decidir qué es lo que les conviene antes de visitarlo en persona.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        justifyContent="flex-end"
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item align={matchesSM ? "center" : undefined}>
              <Typography variant="h4" gutterBottom>
                Optimización del <br /> Motor de Búsqueda
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="SEO " />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? "0" : "1em" }}
          className={classes.paragraphContainer}
          align={matchesSM ? "center" : undefined}
        >
          <Typography variant="body1" paragraph>
            ¿Cuántas veces has estado en la segunda página de resultados de
            Google?
          </Typography>
          <Typography variant="body1" paragraph>
            Si eres como nosotros, probablemente nunca.
          </Typography>
          <Typography variant="body1" paragraph>
            Los clientes tampoco van allí, así que asegúrese de que su sitio web
            está diseñado para terminar en la parte superior.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}
