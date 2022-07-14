module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Безалкогольные Напитки',
        img: '/img/напитки.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Алкогольные Напитки',
        img: '/img/алкоголь.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Пасты',
        img: '/img/паста.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Горячие Блюда',
        img: '/img/горячее.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
