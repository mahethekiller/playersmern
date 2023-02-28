import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import routes from "../backend/routes/soccerRoutes";

const app = express();
const PORT = 4000;

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/soccerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// body parser Setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS SETUP

app.use(cors());

routes(app);

app.get("/", (req, res) =>
  res.send(`Our Soccer App is running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your Soccer serve is running on port ${PORT}`)
);
