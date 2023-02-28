import React from "react";
const PlayerSingle = (props) => {
  const heit = {
    width: "500px",
  };

  return (
    <div className="row">
      <div className="col s12 ">
        <div className="card">
          <div className="card-image">
            <img style={heit} src="soccer.jpeg" />
            <span className="card-title">
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>
          <div className="card-content">
            <p>
              Phone: {props.player.phone} - Email: {props.player.email}
            </p>
            <p>
              Strength: {props.player.strength} - Endu: {props.player.endurance}
            </p>
          </div>
          <div className="card-action">Team: {props.player.team}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSingle;
