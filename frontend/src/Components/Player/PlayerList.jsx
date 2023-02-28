import React from "react";

const PlayerList = (props) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Players</h4>
          {props.players.map((item) => (
            <a
              href="#!"
              className="collection-item"
              key={item._id}
              onClick={() => props.updateCurrentPlayer(item)}
            >
              {item.firstName} {item.lastName}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default PlayerList;
