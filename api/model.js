const db = require("../data/dbconfig");

const getAll = () => {
  return db("test");
};
const insert = (newName) => {
  return db("test").insert(newName);
};

const remove = (id) => {
  return db("test").where({ id }).del();
};

module.exports = {
  getAll,
  remove,
  insert,
};
