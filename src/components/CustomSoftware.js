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
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import root from "../assets/root.svg";
import { Link } from "react-router-dom";

import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data";
import autmationAnimation from "../animations/automationAnimation/data";
import uxAnimation from "../animations/uxAnimation/data";
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
}));

const CustomSoftware = (props) => {
  const { setSelectedIndex, setValue } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: autmationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
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
              to="/services"
              onClick={() => {
                setValue(1);
              }}
            >
              <img src={backArrow} alt="Back to services" />
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
              Desarrollo de software a medida
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Ya sea que estemos reemplazando software antiguo o inventando
              nuevas soluciones, Amp Development está aquí para ayudarle a
              abordar la tecnología
            </Typography>
            <Typography variant="body1" paragraph>
              El uso de software comercial te deja un montón de cosas que no
              necesitas con algunas de las que sí necesitas y, en todo caso,
              controla tu forma de trabajar. Si no utilizas ningún tipo de
              software, corres el riesgo de quedarte atrás con respecto a la
              competencia y de perder el enorme ahorro que produce el aumento de
              la eficiencia.
            </Typography>
            <Typography variant="body1" paragraph>
              Nuestras soluciones personalizadas se diseñan desde el principio
              teniendo en cuenta tus necesidades, deseos y objetivos. Este
              proceso de colaboración da como resultado un software
              perfectamente ajustado que es mucho más eficaz para mejorar tu
              flujo de trabajo y reducir los costes en comparación con las
              opciones genéricas.
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
              to="/mobileapps"
              onClick={() => {
                setSelectedIndex(1);
              }}
            >
              <img src={forwardArrow} alt="Forward to mobile app Development" />
            </IconButton>
          </Grid>
        </Hidden>
        {/*
        <Grid item style={{ marginLeft: "20em", marginTop: "1em" }}>
          <img src={matchesSM ? customAlt : custom} alt="custom" />
        </Grid>
*/}
      </Grid>

      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justifyContent="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h2">Ahórrate energía</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="Lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "8em" : 0,
            marginBottom: matchesSM ? "8em" : 0,
          }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h2">Ahórrate tiempo</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="Stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h2">Ahórrate dinero</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="Cash" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justifyContent="space-between"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          style={{ marginBottom: matchesMD ? "10em" : undefined }}
          direction={matchesSM ? "column" : "row"}
        >
          <Grid
            item
            container
            direction="column"
            md
            align={matchesSM ? "center" : undefined}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Documentos y datos digitales
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Reduzca los errores. Reduzca los residuos. Reduzca los costes.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Cada año se gastan miles de millones en la compra, impresión y
                distribución de papel. Además del enorme impacto ecológico que
                tiene, también perjudica a su cuenta de resultados.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Utilizando formularios y documentos digitales puede reducir
                estos gastos obsoletos, acelerar su comunicación y ayudar a el
                planeta.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{
                maxHeight: 260,
                maxWidth: 280,
                marginBottom: matchesSM ? "2em" : undefined,
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            align={matchesSM ? "center" : "right"}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Escala
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Ya sea una marca grande, que acaba de empezar o que está
                despegando ahora mismo, nuestra arquitectura de aplicaciones
                garantiza un crecimiento y una fiabilidad sin problemas.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ marginBottom: "20em", marginTop: "20em" }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={root}
              alt="tree roots"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
              style={{ margin: "1em" }}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" gutterBottom align="center">
              Análisis de la causa raíz
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Muchos problemas no son más que síntomas de cuestiones más amplias
              y subyacentes.
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Podemos ayudarte a examinar a fondo todas las áreas de tu negocio
              para desarrollar un plan holístico para la implementación más
              efectiva de la tecnología.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        justifyContent="space-between"
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginBottom: matchesMD ? "10em" : "5em" }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? "column" : "row"}
        >
          <Grid
            item
            container
            direction="column"
            md
            align={matchesSM ? "center" : undefined}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Automatización
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Podemos ayudarte a identificar procesos de acciones o eventos
                que actualmente pueden ser fácilmente automatizados.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                El aumento de la eficiencia incrementa los beneficios y te deja
                más tiempo para centrarte en tu negocio, no en el trabajo
                pesado.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Utilizando formularios y documentos digitales puede reducir
                estos gastos obsoletos, acelerar su comunicación y ayudar a la
                Tierra.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{
                maxHeight: 290,
                maxWidth: 280,
                marginTop: matchesSM ? "2em" : undefined,
              }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{
                maxHeight: 310,
                maxWidth: 155,
                marginBottom: matchesSM ? "2em" : undefined,
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            align={matchesSM ? "center" : "right"}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Diseño de la Experiencia de Usuario
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Un diseño que no es amigable no es un buen diseño.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Entonces, ¿por qué hay tantas piezas de software complicadas,
                confusas y frustrantes?
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Si damos prioridad a los usuarios y a las formas reales en que
                interactúan con la tecnología, podemos desarrollar experiencias
                agradables que resuelvan los problemas en lugar de crear
                problemas nuevos.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
