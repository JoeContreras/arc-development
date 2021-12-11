import React, { useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import LanguageIcon from "@material-ui/icons/Language";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import ClosedCaptionIcon from "@material-ui/icons/ClosedCaption";
import CheckIcon from "@material-ui/icons/Check";
import {
  courseContent,
  description1,
  learnInfo,
  learnInfo2,
} from "../Constants/Course/courseConstants";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import OnDemandIcon from "@material-ui/icons/OndemandVideo";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import PhoneIcon from "@material-ui/icons/PhoneIphone";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { PlayCircleFilled } from "@material-ui/icons";

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
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  hero: {
    backgroundColor: "#1C1D1F",
    height: "22em",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "25em",
      // backgroundColor: "red",
      // width: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "27.5rem",
      // width: "20em",
    },
  },
  heroContent: {
    maxWidth: "45em",
    [theme.breakpoints.down("md")]: {
      maxWidth: "35em",
      // height: "18em",
      // width: "20em",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "35em",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "21rem",
    },
    // marginLeft: "25em",
    // marginTop: "1em",
    // [theme.breakpoints.down("md")]: {
    //   width: "20em",
    //   marginLeft: "5em",
    // },
  },
  heroSubtitle: {
    color: theme.palette.common.orange,
  },
  learning: {
    maxWidth: "45.5em",

    // marginLeft: "25em",
    // marginTop: "1em",
    // margin: "1 auto",
    [theme.breakpoints.down("md")]: {
      width: "36em",
      // marginTop: "3em",
      // width: "48em",
      // margin: "0 10em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "29em",
      // marginTop: "3em",
      // width: "48em",
      // margin: "0 10em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "22rem",
      // width: "48em",
      // margin: "0 10em",
    },
  },
  learnMoreCard: {
    width: "45em",
    [theme.breakpoints.down("md")]: {
      width: "35rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "22rem",
    },
  },
  stickyContainer: {
    // position: "absolute",
    // top: "30.5rem",
    // right: "20rem",
    // [theme.breakpoints.down("md")]: {
    //   position: "static",
    // },
  },
  stickyCard: {
    width: "25em",
    [theme.breakpoints.down("xs")]: {
      width: "22rem",
    },
  },
  cardButtons: {
    width: "23em",
    [theme.breakpoints.down("xs")]: {
      width: "20rem",
    },
  },
}));

const Course = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  // const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  // const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));
  // const { setValue, setSelectedIndex } = props;

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  const infoCard = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          align={matchesMD ? "center" : undefined}
        >
          Lo que aprenderás
        </Typography>

        <Grid container direction="row">
          <Grid item container direction="column" md>
            {/*
                        //Mobile version === direction=>column
                        */}
            <Grid item>
              {learnInfo.map((topic, index) => (
                <Grid container key={topic + index}>
                  <Grid item xs={1}>
                    <CheckIcon />
                  </Grid>

                  <Grid item xs style={{ marginBottom: ".5rem" }}>
                    <Typography
                      style={{ fontSize: "1rem" }}
                      // color="text.secondary"
                    >
                      {topic}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item container direction="column" md>
            {/*
                        //Mobile version === direction=>column
                        */}
            <Grid item>
              {learnInfo2.map((topic, index) => (
                <Grid container key={topic + index}>
                  <Grid item xs={1}>
                    <CheckIcon />
                  </Grid>

                  <Grid item xs style={{ marginBottom: ".5rem" }}>
                    <Typography
                      style={{ fontSize: "1rem" }}
                      // color="text.secondary"
                    >
                      {topic}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </React.Fragment>
  );

  const stickyCard = (
    <Card style={{ maxWidth: "25em" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://res.cloudinary.com/joeutd/image/upload/v1638661904/arc/unity1_x55z30.jpg"
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <Typography gutterBottom variant="h5">
              MX$129
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="subtitle1"
              style={{ fontSize: "1.2rem", textDecoration: "line-through" }}
            >
              MX$1,079
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              88% de descuento
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item style={{ marginRight: "0.5rem" }}>
            <AccessAlarmIcon fontSize="medium" />
          </Grid>

          <Grid item>
            <Typography variant="body2">
              ¡Quedan 13 horas a este precio!
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          style={{ marginTop: "1em" }}
          className={classes.cardButtons}
        >
          <Grid
            item
            container
            direction="row"
            spacing={2}
            style={{ width: "100%" }}
          >
            <Grid item xs={10}>
              <Button
                variant="contained"
                disableElevation
                disableRipple
                color="primary"
                size="large"
                style={{ width: matchesXS ? "15rem" : "18rem" }}
              >
                Añadir al carrito
              </Button>
            </Grid>

            <Grid item xs={2}>
              <Button variant="outlined" size="large">
                <FavoriteBorderIcon color="secondary" />
              </Button>
            </Grid>
          </Grid>

          <Grid item style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Button
              variant="outlined"
              disableElevation
              disableRipple
              size="large"
              style={{ width: matchesXS ? "19rem" : "23.5rem" }}
            >
              Comprar Ahora
            </Button>
          </Grid>

          <Grid item align="center">
            <Typography variant="body1" style={{ fontSize: "1.15rem" }}>
              Garantía de devolución del dinero en 30 días
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Typography
              variant="h5"
              style={{
                fontSize: "1.3rem",
                marginTop: "1rem",
              }}
            >
              Este curso incluye:
            </Typography>
          </Grid>

          <Grid item container spacing={1}>
            <Grid item>
              <OnDemandIcon />
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: "1rem" }} variant="subtitle1">
                30 horas de vídeo a su disposición
              </Typography>
            </Grid>
          </Grid>

          <Grid item container spacing={1}>
            <Grid item>
              <InsertDriveFileIcon />
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: "1rem" }} variant="subtitle1">
                2 Articulos
              </Typography>
            </Grid>
          </Grid>

          <Grid item container spacing={1}>
            <Grid item>
              <AllInclusiveIcon />
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: "1rem" }} variant="subtitle1">
                Acceso total de por vida
              </Typography>
            </Grid>
          </Grid>

          <Grid item container spacing={1}>
            <Grid item>
              <PhoneIcon />
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: "1rem" }} variant="subtitle1">
                Acceso en el móvil y la televisión
              </Typography>
            </Grid>
          </Grid>

          <Grid item container spacing={1}>
            <Grid item>
              <EmojiEventsIcon />
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: "1rem" }} variant="subtitle1">
                Certificado de finalización
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          style={{ marginTop: "1rem" }}
          justifyContent="center"
        >
          <Grid item>
            <Button
              disableElevation
              disableRipple
              disableFocusRipple
              disableTouchRipple
              variant="text"
              color="primary"
            >
              Aplicar el cupón
            </Button>
          </Grid>

          <Grid item variant="text">
            <Button
              disableElevation
              disableRipple
              disableFocusRipple
              disableTouchRipple
              variant="text"
              color="primary"
            >
              Regalar este curso
            </Button>
          </Grid>
        </Grid>

        <Divider />

        <Grid
          container
          direction="column"
          style={{ marginTop: "1rem" }}
          spacing={2}
        >
          <Grid item>
            <Typography style={{ fontSize: "1.3rem" }} variant="h5">
              ¿Entrenar a 5 o más personas?
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{ fontSize: "1.1rem" }}>
              Consiga que su equipo tenga acceso a más de 6.000 cursos de Amp en
              cualquier momento y lugar.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              color="primary"
              href="https://drive.google.com/file/d/1B8Gst0oclukoS1fHh8da7gXghjB7v0NB/view?usp=sharing"
              target="_blank"
            >
              Descargar un juego de ejemplo
            </Button>
          </Grid>
        </Grid>
      </CardContent>

      {/*
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
*/}
    </Card>
  );

  const TrustedCard = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          align={matchesMD ? "center" : undefined}
        >
          Las mejores empresas ofrecen este curso a sus empleados
        </Typography>
        <Typography
          variant="body1"
          style={{ fontSize: "1rem" }}
          component="div"
          gutterBottom
        >
          Este curso ha sido seleccionado para nuestra colección de cursos mejor
          valorados y en los que confían las empresas.
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          style={{ marginTop: "2rem" }}
        >
          <Grid item>
            <img
              src="https://res.cloudinary.com/joeutd/image/upload/v1638467505/arc/apple-dark_pzit0w.svg"
              alt="apple"
            />
          </Grid>
          <Grid item>
            <img
              src="https://res.cloudinary.com/joeutd/image/upload/v1638469017/arc/box-dark_fif8bh.svg"
              alt="apple"
            />
          </Grid>
          <Grid item>
            <img
              src="https://res.cloudinary.com/joeutd/image/upload/v1638469017/arc/volkswagen-dark_cum0zy.svg"
              alt="apple"
            />
          </Grid>
          <Grid item>
            <img
              src="https://res.cloudinary.com/joeutd/image/upload/v1638469017/arc/netflix-dark_tmrq0f.svg"
              alt="apple"
            />
          </Grid>
          <Grid item>
            <img
              src="https://res.cloudinary.com/joeutd/image/upload/v1638469017/arc/eventbrite-dark_vv7qqh.svg"
              alt="apple"
            />
          </Grid>
        </Grid>
      </CardContent>
    </React.Fragment>
  );

  const CourseContent = (
    <div>
      {courseContent.map((item, index) => (
        <Accordion key={item + index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography
                  style={{ fontSize: "1.15rem", fontWeight: "500" }}
                  variant="h5"
                >
                  {item.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={{ fontSize: "1em" }} variant="h5">
                  {item.length}
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          {item.content.map((lecture, index) => (
            <AccordionDetails key={lecture + index}>
              <Grid container justifyContent="space-around">
                <Grid item container xs={11} spacing={1}>
                  <Grid item>
                    <PlayCircleFilled />
                  </Grid>
                  <Grid item>
                    <Typography style={{ fontSize: "1rem" }} variant="body1">
                      {lecture.title}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={1}>
                  <Typography
                    style={{ fontSize: "1rem" }}
                    variant="body1"
                    color="primary"
                  >
                    {lecture.length}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  );

  const courseRequirements = (
    <Grid
      container
      style={{ maxWidth: matchesXS ? "22rem" : matchesSM ? "35em" : "46.5rem" }}
    >
      <Grid item>
        <Typography variant="h4">Requisitos</Typography>
      </Grid>
      <Grid item container direction="column">
        <ul>
          <li>
            <Grid item>
              <Typography variant="body1" style={{ fontSize: "1rem" }}>
                PC o Mac capaz de ejecutar Unity 2017 o posterior.
              </Typography>
            </Grid>
          </li>
          <li>
            <Grid item>
              <Typography variant="body1" style={{ fontSize: "1rem" }}>
                Acceso regular a Internet para las preguntas y respuestas y la
                comunidad.
              </Typography>
            </Grid>
          </li>
        </ul>
      </Grid>
    </Grid>
  );

  const courseDescription = (
    <div style={{ marginBottom: "4rem" }}>
      <Accordion elevation={1}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid container>
            <Grid item>
              <Typography variant="h4">Descripción</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="column" style={{ width: "100%" }}>
            <Grid item style={{ marginBottom: "1em" }}>
              <Typography style={{ fontSize: "1rem" }} variant="body1">
                {" "}
                Si está interesado en desarrollar juegos sorprendentes y de
                calidad comercial que son jugables en una variedad de
                plataformas, entonces usted ha llegado al lugar adecuado. Este
                curso de Unity es el único de de este tipo aprobado por Unity
                Technologies en Udemy. ¿Qué mejor manera de aprender a
                desarrollar juegos en Unity que con su curso autorizado? La Guía
                definitiva para el desarrollo de juegos con Unity te introduce
                en el motor Unity y en los fundamentos de la programación en C#.
                El curso luego se sumerge en el desarrollo de tus primeros
                juegos en 2D y 3D. Descubrirá cómo distinguir sus juegos de los
                demás puliéndolos con las últimas características de Unity,
                incluyendo los efectos de post-procesamiento y el sistema de
                animación.
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "1em" }}>
              <Typography style={{ fontSize: "1rem" }} variant="body1">
                Este curso de Unity también incluye más de 50 retos interactivos
                (¡nuevo contenido añadido semanalmente!) en los que podrás poner
                a prueba tus conocimientos con los conceptos que acabas de
                aprender. Estos desafíos te ayudarán a construir dos juegos de
                calidad comercial: un juego de disparos de galaxias en 2D con
                sprites pulidos y efectos cinemáticos, y un juego de control en
                primera persona en 3D. Accede a las obras de arte exclusivas que
                ofrece este curso de Unity y añade sofisticadas características
                a tus juegos que te harán parecer que llevas años programando.
              </Typography>
            </Grid>
            {description1.map((description, index) => (
              <Grid
                container
                direction="column"
                spacing={1}
                key={description + index}
              >
                <Grid item>
                  <Typography variant="h4" style={{ fontSize: "1.2rem" }}>
                    {description.title}
                  </Typography>
                </Grid>
                <Grid item container>
                  <ul>
                    {description.content.map((item, index) => (
                      <li style={{ marginBottom: ".5rem" }} key={item + index}>
                        <Grid item>
                          <Typography
                            style={{ fontSize: "1rem" }}
                            variant="body1"
                          >
                            {item}
                          </Typography>
                        </Grid>
                      </li>
                    ))}
                  </ul>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );

  return (
    <Grid container direction="column" style={{ margin: 0 }}>
      <ScrollToTopOnMount />
      {/*Hero Section*/}
      <Grid
        container
        justifyContent={matchesMD ? "center" : "flex-start"}
        className={classes.hero}
        alignItems="center"
      >
        <Grid
          item
          container
          direction="column"
          className={classes.heroContent}
          style={{ marginLeft: matchesMD ? null : "25em" }}
          align={matchesMD ? "center" : undefined}
        >
          <Typography
            variant="h3"
            gutterBottom
            className={classes.heroSubtitle}
            style={{ fontSize: "1.2rem" }}
          >
            Desarrollo > Desarrollo de juegos > Desarrollo de juegos 3D
          </Typography>
          <Typography variant="h2" style={{ fontSize: "1.8rem" }}>
            Desarrollador completo de juegos C# Unity 3D
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: ".5em" }}>
            Diseña y desarrolla videojuegos. Aprende C# en el motor Unity.
            Codifica tus primeros juegos Unity 3D para web, Mac y PC.
          </Typography>
          <Typography variant="body2" gutterBottom>
            <span style={{ color: "#FFBA60" }}>(33,299 evaluaciones)</span>{" "}
            150,224 estudiantes{" "}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Creado por <span style={{ color: "#FFBA60" }}>Joe Contreras</span>{" "}
            <span style={{ color: "#FFBA60" }}>, Jose Luis Gutierrez</span>{" "}
            <span style={{ color: "#FFBA60" }}>, Saul Gutierrez</span>{" "}
            <span style={{ color: "#FFBA60" }}>, Paola Zamora</span>{" "}
          </Typography>
          <Grid
            container
            spacing={1}
            justifyContent={matchesMD ? "center" : undefined}
          >
            <Grid item>
              <NewReleasesIcon color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="body2" gutterBottom>
                Última actualización 11/2021{" "}
              </Typography>
            </Grid>
            <Grid item>
              <LanguageIcon color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="body2" gutterBottom>
                {" "}
                English{" "}
              </Typography>
            </Grid>
            <Grid item>
              <ClosedCaptionIcon color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="body2">English, Spanish [Auto], </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*Info Section*/}
      {/* mobile => Direction=== column*/}
      <Grid
        container
        direction={matchesMD ? "column" : "row"}
        justifyContent="space-evenly"
        alignItems={matchesMD ? "center" : undefined}
        style={{ marginTop: "3rem" }}
        // spacing={2}
      >
        <Hidden lgUp>
          <Grid item className={classes.stickyContainer}>
            <Card className={classes.stickyCard} variant="outlined">
              {stickyCard}
            </Card>
          </Grid>
        </Hidden>
        <Grid
          item
          container
          direction="column"
          className={classes.learning}
          // spacing={2}
          alignItems={matchesSM ? "center" : undefined}
          style={{ marginTop: matchesMD ? "3rem" : undefined }}
        >
          <Grid item>
            <Card className={classes.learnMoreCard} variant="outlined">
              {infoCard}
            </Card>
          </Grid>
          <Grid item style={{ marginTop: "3rem", marginBottom: "3rem" }}>
            <Card className={classes.learnMoreCard} variant="outlined">
              {TrustedCard}
            </Card>
          </Grid>

          <Grid item align={matchesMD ? "center" : undefined}>
            <Typography color="primary" variant="h4">
              Contenido del curso
            </Typography>
          </Grid>

          <Grid item align={matchesMD ? "center" : undefined}>
            <Typography variant="subtitle1" style={{ fontSize: "1rem" }}>
              8 secciones • 126 lecciones • 28h 9m de duración total
            </Typography>
          </Grid>

          <Grid item style={{ marginBottom: "2em" }}>
            <Card className={classes.learnMoreCard} variant="outlined">
              {CourseContent}
            </Card>
          </Grid>

          <Grid
            item
            style={{
              width: matchesXS ? "22rem" : matchesMD ? "35rem" : "46.5rem",
              marginBottom: "1em",
            }}
          >
            <Divider variant="middle" />
          </Grid>

          <Grid item>{courseRequirements}</Grid>

          <Grid
            item
            style={{
              width: matchesXS ? "22rem" : matchesMD ? "35rem" : "46.5rem",
            }}
          >
            <Divider variant="middle" />
          </Grid>

          <Grid
            item
            style={{
              width: matchesXS ? "22rem" : matchesMD ? "35em" : "46.5rem",
              marginTop: "2em",
            }}
          >
            {courseDescription}
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Grid item className={classes.stickyContainer}>
            <Card className={classes.stickyCard} variant="outlined">
              {stickyCard}
            </Card>
          </Grid>
        </Hidden>
      </Grid>
      {/*<CallToAction setValue={setValue} />*/}
    </Grid>
  );
};
export default Course;
