import React, { Component } from "react";
import axios from "axios";
import "../Components/App.css";
import PlayerList from "./Player/PlayerList";
import PlayerSingle from "./Player/PlayerSingle";
import AddPlayer from "./Player/AddPlayer";
import RouterDef from "../RouterDef";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a href="/" className="brand-logo">
                Soccer Management
              </a>

              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/players">Players</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container">
          <RouterDef />
        </div>
        {/* <div className="row">
          <div className="col s3">
            <PlayerList players={this.state.players} updateCurrentPlayer={this.updateCurrentPlayer} />
          </div>
          <div className="col s9">
            <PlayerSingle player={this.state.currentPlayer} />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <AddPlayer />
          </div>
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
