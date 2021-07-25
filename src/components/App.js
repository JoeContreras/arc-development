import React from "react";
import Theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div style={{ height: "2000px" }}>home</div>}
          />
          <Route exact path="/services" component={() => <div>services</div>} />
          <Route
            exact
            path="/customsoftware"
            component={() => <div>customsoftware</div>}
          />
          <Route exact path="/mobileapps" component={() => <div>mobile</div>} />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
