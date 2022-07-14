const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Checks }) {
      // define association here
      this.hasOne(Checks, { foreignKey: 'client_id' });
    }
  }
  Clients.init({
    check_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};
