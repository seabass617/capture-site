import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//framer animations
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0.5);
  };
  return (
    <div className="app">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
