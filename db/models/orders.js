const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Checks, Products }) {
      // define association here
      this.belongsTo(Checks, { foreignKey: 'check_id' });
      this.belongsTo(Products, { foreignKey: 'product_id' });
    }
  }
  Orders.init({
    check_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    counter: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
