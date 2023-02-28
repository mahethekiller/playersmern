import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  updatePlayer,
  deletePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  // POST  ENDPOINT
  app
    .route("/players")
    //   get endpoint
    .get(getPlayers)
    //   Post endpoint
    .post(addNewPlayer);

  // get by id
  app
    .route("/player/:PlayerId")
    //   get player by id
    .get(getPlayerWithID)
    //   update player by id
    .put(updatePlayer)
    //   Delete player by id
    .delete(deletePlayer);
};

export default routes;
