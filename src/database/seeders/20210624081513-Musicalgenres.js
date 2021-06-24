const musicalGenres = require("../seeds/20210624081513-Musicalgenres")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Musicalgenres", musicalGenres, {});
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Musicalgenres", null, {});    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
