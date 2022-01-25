const express = require("express");
const cors = require("cors");
const app = express();
const controller = require("./controller");

app.use(cors());
app.use(express.json());

const houses = require("./db.json");

//endpoints

app.get("/api/houses", controller.getHouses);
app.post("/api/houses", controller.createHouse);
app.put("/api/houses/:id", controller.updateHouse);
app.delete("/api/houses/:id", controller.deleteHouse);

app.listen(5050, () => console.log("Server is on 5050"));
