const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Track extends Model {}

Track.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Untitled Track",
    },
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: "album",
        key: "id",
      },
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: "artist",
        key: "id",
      },
    },
    album_art: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "../public/images/placeholder_albumart.png",
    },
    duration: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "Track",
  }
);

module.exports = Track;
