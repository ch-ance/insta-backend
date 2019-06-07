const router = require("express").Router();

const Users = require("./users-model");
// const restricted = require("../auth/restricted-middleware.js");

router.get("/users", (req, res) => {
  const users = Users.find();
  res.status(200).json(users);
});

router.get("/users/:username", (req, res) => {
  const username = req.params.username;
  Users.findByUsername(username)
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
