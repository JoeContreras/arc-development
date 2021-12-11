import React, { useEffect } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Lottie from "react-lottie";
import vision from "../assets/vision.svg";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";
import technologyAnimation from "../animations/technologyAnimation/data.json";
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingRight: "5em",
    paddingLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "1.5em",
      paddingLeft: "1.5em",
    },
  },
}));

export default function Revolution(props) {
  const { setValue } = props;
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
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
        className={classes.rowContainer}
        style={{ marginTop: "2em" }}
        align={matchesMD ? "center" : undefined}
      >
        <Typography variant="h2" style={{ fontFamily: "Pacifico" }}>
          La Revolución
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}
      >
        <Grid item lg>
          <img
            src={vision}
            alt="binoculars"
            style={{
              maxWidth: matchesSM ? 300 : "40em",
              marginRight: matchesMD ? "0" : "5em",
              marginBottom: matchesMD ? "5em" : "0",
            }}
          />
        </Grid>

        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : "right"}
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Visión
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              El florecimiento de los ordenadores y, posteriormente, de
              Internet, ha alterado por completo todos los aspectos de la vida
              humana. Ha aumentado nuestra comodidad, ha ampliado nuestras
              conexiones y ha reconfigurado nuestra forma de ver el mundo.
            </Typography>
            <Typography variant="body1" paragraph>
              Lo que antes estaba confinado a enormes salas y equipos de
              ingenieros, ahora reside en cada una de nuestras manos. Aprovechar
              este potencial ilimitado utilizándolo para resolver problemas y
              mejorar vidas es la esencia de todo lo que hacemos.
            </Typography>
            <Typography variant="body1" paragraph>
              Queremos ayudar a las empresas a sacar partido de la última y
              mejor tecnología. La mejor manera de predecir el futuro es ser
              quien lo construye y queremos ayudar al mundo a entrar en este
              próximo capítulo de expansión tecnológica, exploración e
              innovación.
            </Typography>
            <Typography variant="body1" paragraph>
              Si nos atenemos a unas normas rigurosas y a una calidad impecable,
              podemos garantizar que usted disponga de las mejores herramientas
              necesarias para prosperar en esta nueva frontera.
            </Typography>
            <Typography variant="body1" paragraph>
              Vemos un futuro en el que cada persona tiene un software
              personalizado adaptado a su estilo de vida, cultura e intereses,
              que le ayuda a superar los obstáculos de la vida. Cada proyecto es
              un paso hacia ese objetivo.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          style={{ maxWidth: "40em" }}
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Tecnología
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              En 2013, Facebook inventó una nueva forma de construir sitios web.
              Este nuevo sistema, React.js, revoluciona por completo el proceso
              y la práctica del desarrollo de sitios web.
            </Typography>
            <Typography variant="body1" paragraph>
              En lugar de encadenar largas páginas individuales, como los sitios
              web tradicionales, los sitios web React se construyen con pequeños
              trozos de código llamados componentes. Estos componentes son más
              rápidos, más fáciles de mantener y son fácilmente reutilizables y
              personalizables, sirviendo cada uno de ellos para un propósito
              singular.
            </Typography>
            <Typography variant="body1" paragraph>
              Dos años más tarde, sorprendieron al mundo lanzando un sistema
              similar, React Native, para producir aplicaciones para iOS y
              Android. En lugar de tener que dominar dos plataformas de
              desarrollo completamente separadas, puedes aprovechar los
              conocimientos que ya poseías de la construcción de sitios web y
              reaplicarlos directamente. Esto fue un gran salto adelante.
            </Typography>
            <Typography variant="body1" paragraph>
              Esta tecnología está siendo utilizada por empresas como AirBnB,
              Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, y cuando
              Facebook compró Instagram grandes partes de ella fueron incluso
              reconstruidas usando React.
            </Typography>
            <Typography variant="body1" paragraph>
              Desde entonces, los desarrolladores han construido sobre estos
              sistemas automatizando la configuración y el despliegue de los
              proyectos, lo que permite a los creadores centrarse al máximo en
              su propio trabajo.
            </Typography>
            <Typography variant="body1" paragraph>
              Estos avances técnicos se traducen en ahorros al reducir
              significativamente la carga de trabajo y agilizar el flujo de
              trabajo para el desarrollo de nuevas piezas de software, al tiempo
              que se reduce la barrera de entrada para el desarrollo de
              aplicaciones móviles.
            </Typography>
            <Typography variant="body1" paragraph>
              Esto pone la personalización en tu bolsillo: más rápido, mejor y
              más asequible que nunca.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justifyContent={matchesMD ? "center" : "flex-end"}
          lg
        >
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "40em", margin: "0" }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#A0A6BE", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Consulta
            </Typography>
          </Grid>
          <Grid item style={{ maxWidth: "20em" }}>
            <Typography variant="body1" paragraph style={{ color: "#33384B" }}>
              Nuestro proceso comienza en el momento en que se da cuenta de que
              necesita una pieza de tecnología para su negocio. Ya sea que tenga
              una idea de por dónde empezar y qué hacer, o si simplemente sabe
              que quiere dar un paso adelante, nuestra consulta inicial le
              ayudará a examinar su negocio de forma exhaustiva para encontrar
              las mejores soluciones.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#33384B" }}>
              Se tomarán notas detalladas sobre sus necesidades y limitaciones,
              al tiempo que se identifican otras áreas potenciales a tener en
              cuenta.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#33384B" }}>
              Los avances de vanguardia en el aprendizaje automático, como la
              detección de objetos y el procesamiento del lenguaje natural,
              permiten a los ordenadores hacer cosas antes inimaginables, y
              nuestra experiencia e intuición le ayudarán a entrar en este nuevo
              futuro de posibilidades
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={consultation}
            alt="handshake"
            style={{ maxWidth: 700 }}
            width="100%"
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#F9423A", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#150000", marginTop: "5em" }}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item style={{ maxWidth: "20em" }}>
            <Typography variant="body1" paragraph style={{ color: "#150000" }}>
              Una vez que hayamos decidido cuál es el mejor camino a seguir y la
              solución a seguir, se finalizarán detalles como el coste y el
              calendario.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#150000" }}>
              Entonces es el momento de empezar a trabajar en su producto mínimo
              viable. Esto es un término elegante para referirse a una maqueta,
              que no incluye colores, imágenes ni ningún otro elemento de diseño
              pulido, pero que capta la estructura esencial del diseño y la
              funcionalidad.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#150000" }}>
              Esto nos ayuda a entender y refinar la solución en sí misma antes
              de distraernos con detalles y apariencias.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={mockup}
            alt="basic design outline"
            style={{ maxWidth: 1000, marginTop: matchesMD ? "1.5em" : 0 }}
            width="100%"
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#38a860", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Revisión
            </Typography>
          </Grid>
          <Grid item style={{ maxWidth: "20em" }}>
            <Typography variant="body1" paragraph style={{ color: "#10301B" }}>
              Antes de seguir avanzando, le comunicamos nuestros progresos. Esto
              le da la libertad de discutir cualquier cambio que desee o
              cualquier idea que se le ocurra antes de que se haya hecho
              cualquier trabajo pesado.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#10301B" }}>
              Le hacemos una demostración interactiva de las maquetas y le
              explicamos a fondo el proceso de reflexión que se ha llevado a
              cabo en cada pantalla y en cada característica prevista.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#10301B" }}>
              Una vez que esté completamente satisfecho con la visión de nuestra
              solución, nos ponemos a trabajar en los detalles del diseño.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={review}
            alt="magnifying glass"
            width="100%"
            style={{ maxWidth: 700, marginTop: matchesMD ? "1.5em" : 0 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#A77D52", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Diseño
            </Typography>
          </Grid>
          <Grid item style={{ maxWidth: "20em" }}>
            <Typography variant="body1" paragraph style={{ color: "#000000" }}>
              Utilizando las maquetas y las notas tomadas durante la consulta
              como guía, empezaremos a perfilar el aspecto del producto final.
              Esto también implica el uso de cualquier material de marca, como
              fuentes, colores y logotipos, para ampliar la experiencia con la
              que ya está familiarizado.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#000000" }}>
              Ningún aspecto es innecesario, y se tendrá cuidado con cada
              decisión.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={design}
            alt="paintbrush"
            style={{ maxWidth: 1500, marginTop: matchesMD ? "2.5em" : 0 }}
            width="100%"
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#ACC8E5", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#112A46", marginTop: "5em" }}
            >
              Revisión
            </Typography>
          </Grid>
          <Grid item style={{ maxWidth: "20em" }}>
            <Typography variant="body1" paragraph style={{ color: "#112A46" }}>
              Una segunda ronda de revisión es esencial para nuestro objetivo de
              crear exactamente lo que quieres, exactamente como lo quieres.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#112A46" }}>
              Esta vez repasaremos los diseños finalizados en otra demostración
              totalmente interactiva. Una vez más, esto le da la oportunidad de
              ajustar las cosas y asegurarse de que lo hacemos todo bien a la
              primera.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={review}
            alt="magnifying glass"
            width="100%"
            style={{ maxWidth: 700, marginTop: matchesMD ? "2.5em" : 0 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#e5c9ac", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#150000", marginTop: "5em" }}
            >
              Construcción
            </Typography>
          </Grid>
          <Grid item style={{ maxWidth: "40em" }}>
            <Typography variant="body1" paragraph style={{ color: "#150000" }}>
              Aquí es donde nos ponemos manos a la obra.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#150000" }}>
              La ingeniería comienza tras su aprobación de los diseños finales.
              Empezamos por estructurar el proyecto en un nivel alto, dando
              prioridad a unas áreas sobre otras.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#150000" }}>
              A continuación, cada área se desarrolla por orden de importancia
              hasta que esté lista para conectarse a la siguiente pieza.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#150000" }}>
              Por lo general, el backend, las operaciones detrás de escena, se
              completan primero. Una vez que todos los servicios están en su
              sitio, podemos crear el front-end, la parte que se dirige al
              usuario.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#150000" }}>
              Sin embargo, terminar la aplicación no significa que hayamos
              terminado, ya que realizamos pruebas exhaustivas para garantizar
              la compatibilidad con todos los dispositivos previstos.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#150000" }}>
              Sólo después de nuestros rigurosos exámenes aceptaremos un
              producto como terminado, para luego empujarlo a través de la vía
              de producción. Esto produce una versión optimizada, comprimida y
              de consumo del código y los activos listos para su despliegue.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={build}
            alt="building construction site"
            width="100%"
            style={{
              maxWidth: matchesMD ? "700px" : "1000px",
              marginTop: matchesMD ? "2.5em" : 0,
            }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#AEB6E5", height: "100em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#150000", marginTop: "5em" }}
            >
              El Lanzamiento
            </Typography>
          </Grid>
          <Grid item style={{ maxWidth: "30em" }}>
            <Typography variant="body1" paragraph style={{ color: "#150000" }}>
              El momento que todos estábamos esperando.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#150000" }}>
              Cuando la construcción llega a su fin, usted es el primero en
              saberlo. Haremos una demostración final para mostrar su nuevo y
              brillante software en la naturaleza para que sepa exactamente cómo
              se verá a sus usuarios.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#150000" }}>
              Cuando usted lo diga, pulsaremos el botón y lanzaremos su proyecto
              al público. Estamos ahí para asegurarnos de que todo salga bien,
              para que pueda empezar a recoger los frutos de su inversión
              tecnológica de inmediato.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={launch}
            alt="Rocket"
            style={{ maxWidth: 200 }}
            width="100%"
            // height={matchesSM? "50%": "90%"}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#36558F", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#fff", marginTop: "5em" }}
            >
              Mantenimiento
            </Typography>
          </Grid>
          <Grid item style={{ maxWidth: "20em" }}>
            <Typography variant="body1" paragraph style={{ color: "#fff" }}>
              Nuestro trabajo no termina ahí.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#fff" }}>
              Después de un lanzamiento exitoso nos mantenemos en comunicación
              para escuchar los comentarios y saber cómo está siendo recibido el
              proyecto.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#fff" }}>
              A partir de ahí, nos aseguramos de que su aplicación se mantenga
              actualizada y aproveche las mejores características y prácticas
              disponibles. Cuando surjan nuevos desarrollos o se descubran
              nuevas técnicas en futuros proyectos, implementaremos esos avances
              en su proyecto como parte de nuestro mantenimiento rutinario.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={maintain}
            alt="Wrench"
            style={{
              maxWidth: 500,
              marginTop: matchesMD ? "1.5em" : undefined,
            }}
            width="100%"
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#903756", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#fff", marginTop: "5em" }}
            >
              Iterar
            </Typography>
          </Grid>
          <Grid item style={{ maxWidth: "20em" }}>
            <Typography variant="body1" paragraph style={{ color: "#fff" }}>
              El ciclo se repite cada vez que se le ocurre una nueva idea para
              ampliar su proyecto actual o para crear un sistema completamente
              nuevo.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#fff" }}>
              Al planificar las características y los cambios futuros, podemos
              construir y hacer evolucionar su aplicación a lo largo del tiempo.
              A medida que se desarrollan nuevos casos de uso y necesidades de
              los clientes, podemos responder con la integración continua de
              nuevos contenidos.
            </Typography>
            <Typography variant="body1" paragraph style={{ color: "#fff" }}>
              Nuestro proceso iterativo le mantendrá al día y competitivo,
              permitiéndole implementar rápidamente los cambios en lugar de
              esperar meses para una única actualización.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={iterate}
            alt="Falling dominoes"
            width="100%"
            style={{ marginTop: matchesMD ? "2.5em" : 0 }}
          />
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} />
    </Grid>
  );
}
