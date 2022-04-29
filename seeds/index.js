const seedArtists = require("./artist-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({
    force: true,
  });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedArtists();
  console.log("\n----- ARTISTS SEEDED -----\n");
};

//seedAll();

module.exports = { seedAll };
