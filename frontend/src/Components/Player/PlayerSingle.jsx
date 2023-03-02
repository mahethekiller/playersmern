import axios from "axios";
import React from "react";
const PlayerSingle = (props) => {
  const heit = {
    // width: "500px",
  };

  const deletePlayer = (player) => {
    console.log(player._id);

    if (window.confirm("Do you want to delete " + player.firstName) == true) {
      axios
        .delete("http://localhost:4000/player/" + player._id)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {});
    }
  };

  return (
    <>
      {props.player.firstName && (
        <div className="row">
          <h4>Player Info</h4>
          <button className=" btn-small waves-effect waves-light red right" onClick={() => deletePlayer(props.player)}>
            <i className="material-icons">Del</i>
          </button>

          <button className=" btn-small waves-effect waves-light orange right">
            <i className="material-icons">edit</i>
          </button>
          <div className="col s12 ">
            <div className="card">
              <div className="card-image">
                <img style={heit} src="soccer.jpeg" />
                <span className="card-title white-text">
                  <h4>
                    {props.player ? props.player.firstName : ""} {props.player ? props.player.lastName : ""}
                  </h4>
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
      )}
    </>
  );
};

export default PlayerSingle;
