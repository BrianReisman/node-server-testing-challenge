const express = require("express");
const Model = require("./model");

const server = express();
server.use(express.json());

server.get("/", async (req, res) => {
  const names = await Model.getAll();
  if (names) {
    res.status(200).json(names);
  }
});


server.post("/", async (req, res) => {
  const newName = await Model.insert(req.body);
  console.log(newName)
  if (newName) {
    res.status(201).json(newName);
  }
});

server.delete("/:id", async (req, res) => {
  const removedUser = await Model.remove(req.params.id);
  if (removedUser) {
    res.status(204).json({ message: "deleted" });
  }
});

module.exports = server;
