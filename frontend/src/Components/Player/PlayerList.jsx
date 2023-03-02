import axios from "axios";
import React, { useEffect, useState } from "react";
import AddPlayer from "./AddPlayer";
import PlayerSingle from "./PlayerSingle";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});
  const [showInfo, setShowInfo] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [selectedPlayer, setselectedPlayer] = useState("");

  useEffect(() => {
    const url = "http://localhost:4000/players";
    axios
      .get(url)
      .then((Response) => {
        setPlayers(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateCurrentPlayer = (item) => {
    setShowAdd(false);
    setShowInfo(true);
    setPlayer(item);
    setselectedPlayer(item._id);
  };

  const addNewPlayer = () => {
    setShowInfo(false);
    setShowAdd(true);
  };

  return (
    <>
      <div className="row">
        <div className="col s4">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>
                Players List
                <button className="btn-small right " onClick={() => addNewPlayer()}>
                  Add New
                </button>
              </h4>
              {players.map((item) => (
                <>
                  <a href="#!" className={selectedPlayer == item._id ? "active collection-item" : "collection-item"} key={item._id} onClick={() => updateCurrentPlayer(item)}>
                    {item.firstName} {item.lastName}
                  </a>
                </>
              ))}
            </li>
          </ul>
        </div>
        <div className="col s8">
          <div className="card">
            <div className="card-content">
              {showInfo && (
                <div className="collection-header">
                  <PlayerSingle player={player} />
                </div>
              )}

              {showAdd && (
                <div className="collection-header">
                  <AddPlayer player={player} />
                </div>
              )}

              {showUpdate && (
                <div className="collection-header">
                  <AddPlayer player={player} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerList;
