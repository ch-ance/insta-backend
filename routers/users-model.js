const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findByUsername,
  add
};

function find() {
  return db("users").select("*");
}

function findByUsername(username) {
  return db("users")
    .select("*")
    .where({ username });
}

async function add(user) {
  await db("users")
    .insert(user)
    .returning("*");
}
