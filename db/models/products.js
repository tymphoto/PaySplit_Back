const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Orders, Categories }) {
      // define association here
      this.hasMany(Orders, { foreignKey: 'product_id' });
      this.belongsTo(Categories, { foreignKey: 'categ_id' });
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    img: DataTypes.TEXT,
    categ_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};
