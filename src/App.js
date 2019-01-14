import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Footer from "./components/site/Footer";
import AppBar from "./components/site/AppBar";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <AppBar />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
