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
          Sobre nosotros
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
          Ya sea de persona a persona, de empresa a consumidor, o de un
          individuo a sus intereses, la tecnología está diseñada para acercarnos
          a lo que nos importa de la mejor manera posible. Amp Development
          utilizará ese principio para proporcionar un software rápido, moderno,
          barato y estético al todo el pais y más allá.
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
                Historia
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                Somos el nuevo chico en el barrio
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Fundada en 2020, estamos listos para poner las manos en los
                problemas empresariales del mundo.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Todo comenzó con una pregunta: ¿Por qué no todas las empresas
                utilizan la tecnología disponible? Hay muchas respuestas
                diferentes a esa pregunta: barreras económicas, barreras
                sociales, barreras educativas y, a veces, barreras
                institucionales.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Nuestro objetivo es ser una fuerza poderosa para superar estos
                obstáculos. Los recientes avances en ingeniería de software y
                potencia informática, agravados por la proliferación de
                teléfonos inteligentes, han abierto infinitos mundos de
                posibilidades. Las cosas que siempre se han hecho a mano pueden
                hacerse ahora de forma digital y automática, y cada día se crean
                métodos de interacción completamente nuevos. Aprovechar al
                máximo estos avances es la regla del juego.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Todo este cambio puede ser muy difícil de seguir, y ahí es donde
                entramos nosotros.
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
            Planteamientos de desarrollo que seguimos
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
            Ágil
          </Typography>
        </Grid>
        <Grid item container justify={matchesMD ? "center" : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                La metodología ágil nos permite lanzar rápidamente un software
                fiable e introducir cambios con facilidad. El proceso de
                desarrollo consiste en iteraciones de 1 a 4 semanas que dan como
                resultado una versión evolucionada del software que se envía
                cada vez.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Después de cada iteración, obtenemos comentarios reales de los
                usuarios que nos permiten tomar decisiones informadas sobre los
                siguientes pasos de desarrollo.
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
                Con una cultura DevOps establecida en Amp Development,
                agilizamos la entrega de software y mejoramos su calidad con las
                siguientes mejores prácticas DevOps:
              </Typography>

              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                <Typography color="primary" component="span">
                  Infraestructura como código (IaC):
                </Typography>
                automatizando la creación de nuevas infraestructuras y
                manteniéndolas consistentes entre sí para asegurar un despliegue
                de software sin problemas.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                <Typography color="primary" component="span">
                  Integración continua/entrega continua o despliegue continuo
                  (CI/CD):
                </Typography>
                automatización de la integración y el despliegue de los cambios
                de código.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                <Typography color="primary" component="span">
                  Pruebas automatizadas:
                </Typography>
                automatización de las pruebas de regresión, rendimiento y otros
                tipos de pruebas que se llevan a cabo de forma continua dentro
                de la canalización de CI/CD.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                <Typography color="primary" component="span">
                  Supervisión del rendimiento de las aplicaciones:
                </Typography>
                configuración de las herramientas de supervisión del rendimiento
                de las aplicaciones para detectar rápidamente los errores
                posteriores al lanzamiento.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                La metodología ágil nos permite lanzar rápidamente un software
                fiable e introducir cambios con facilidad. El proceso de
                desarrollo consiste en iteraciones de 1 a 4 semanas que dan como
                resultado una versión evolucionada del software que se envía
                cada vez.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Después de cada iteración, obtenemos comentarios reales de los
                usuarios que nos permiten tomar decisiones informadas sobre los
                siguientes pasos de desarrollo.
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
                Arquitectura modular
              </Typography>
            </Grid>

            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "right"}
                paragraph
              >
                Utilizamos patrones de arquitectura modular, como los
                microservicios, en combinación con contenedores para desarrollar
                aplicaciones como un conjunto de componentes funcionales
                independientes que pueden ser portados sin esfuerzo a cualquier
                entorno.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "right"}
                paragraph
              >
                Este enfoque garantiza una mayor fiabilidad de la aplicación,
                una mejor capacidad de mantenimiento y expansión, así como un
                menor tiempo de desarrollo.
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
