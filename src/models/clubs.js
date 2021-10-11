const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Clubs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clubs.hasMany(models.Djs);
    }
  };
  Clubs.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    }, 
  }, 
  {
    sequelize,
    modelName: "Clubs",
  });
  return Clubs;
};