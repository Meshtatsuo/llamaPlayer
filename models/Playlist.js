const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Playlist extends Model {}

Playlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    track_id: [
      {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "track",
          key: "id",
        },
      },
    ],
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "Playlist",
  }
);

module.exports = Playlist;
