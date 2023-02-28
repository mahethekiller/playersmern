import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);

  newPlayer.save((err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

// Get Players

export const getPlayers = (req, res) => {
  Player.find({}, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

// Get Players by id

export const getPlayerWithID = (req, res) => {
  Player.findById(req.params.PlayerId, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

// Update Players by id

export const updatePlayer = (req, res) => {
  Player.findOneAndUpdate(
    { _id: req.params.PlayerId },
    req.body,
    { new: true },
    (err, Player) => {
      if (err) {
        res.send(err);
      }
      res.json(Player);
    }
  );
};

// Delete Players by id

export const deletePlayer = (req, res) => {
  Player.remove({ _id: req.params.PlayerId }, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted" });
  });
};
