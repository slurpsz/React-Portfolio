import React, { useState } from "react";
import Nav from './components/Nav';
import CssBaseline from "@mui/material/CssBaseline";
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { brown } from "@mui/material/colors";


function App() {
  const color = brown[200]; 

  const [pageState, setPageState] = useState({
    about: true,
    work: false,
    contact: false,
  }) 

  return (
    <>
      <CssBaseline />
      <Nav pageState={pageState} setPageState={setPageState} />
      {pageState.about ? <About /> : ""}
      {pageState.portfolio ? <Portfolio /> : ""}
      {pageState.contact ? <Contact /> : ""}

      <Footer />
    </>
  );
}

export default App;
