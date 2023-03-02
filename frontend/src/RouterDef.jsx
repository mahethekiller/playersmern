import React from "react";
import { Route, Routes } from "react-router-dom";
import PlayerList from "./Components/Player/PlayerList";
import Home from "./Home";

function RouterDef() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/players" element={<PlayerList />}>
          Players
        </Route>
      </Routes>
    </div>
  );
}

export default RouterDef;
