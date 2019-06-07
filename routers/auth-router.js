const authRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const knex = require("knex");
const db = require("../data/dbConfig");

const { getToken } = require("../routers/middlewars");

authRouter.post("/register", (req, res) => {
  const creds = req.body;

  const hash = bcrypt.hashSync(creds.password, 10);

  creds.password = hash;

  db("users")
    .insert(creds)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

authRouter.post("/login", (req, res) => {
  const creds = req.body;

  db("users")
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        // res.status(201).json({ token: getToken(user) });
        res.status(201).json({ token: getToken(user) });
      } else {
        res.status(401).json({ message: "Login failed" });
      }
    });
});

module.exports = authRouter;
