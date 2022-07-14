const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Products }) {
      // define association here
      this.hasMany(Products, { foreignKey: 'categ_id' });
    }
  }
  Categories.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};
