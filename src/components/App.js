import React, { useState } from "react";
import Theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <Services
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
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
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
