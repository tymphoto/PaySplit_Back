const Bcrypt = require('../../utils/bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'bla',
        email: 'bla@mail.ru',
        password: await Bcrypt.hash('123'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vova',
        email: 'vova@mail.ru',
        password: await Bcrypt.hash('123'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Marat',
        email: 'marat@mail.ru',
        password: await Bcrypt.hash('123'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Albert',
        email: 'albert@mail.ru',
        password: await Bcrypt.hash('123'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
