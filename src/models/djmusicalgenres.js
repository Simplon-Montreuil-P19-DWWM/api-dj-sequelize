'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DjMusicalgenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Djs, {foreingKey: "dj_id"});
      this.belongsTo(models.Musicalgenres, {foreingKey: "musicalgenre_id"});
    }
    
  };
  DjMusicalgenres.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    dj_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    musicalgenre_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'DjMusicalgenres',
  });
  return DjMusicalgenres;
};