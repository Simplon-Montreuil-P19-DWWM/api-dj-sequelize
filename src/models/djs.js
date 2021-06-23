const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Djs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Djs.belongsTo(models.Clubs);
    }
  }
  Djs.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    url_name: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    biography: {
      type: DataTypes.STRING,
    },
    souncloud: {
      type: DataTypes.STRING,
    },
    facebook: {
      type: DataTypes.STRING,
    },
    instagram: {
      type: DataTypes.STRING,
    },
    spotify: {
      type: DataTypes.STRING,
    },
    beatport: {
      type: DataTypes.STRING,
    },
    mixcloud: {
      type: DataTypes.STRING,
    },
    youtube: {
      type: DataTypes.STRING,
    },
    club_id: {
      type: DataTypes.UUID,
    }, 
  },
    {
      sequelize,
      modelName: "Djs",
    });
  return Djs;
};
