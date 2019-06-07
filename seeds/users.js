exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([
      { username: "seedUser", password: "password1" }
    ]);
  });
};
