// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable("DjMusicalgenres", {
//       id: {
//         type: Sequelize.UUID,
//         allowNull: false,
//         primaryKey: true,
//       },
//       dj_id: {
//         allowNull: false,
//         type: Sequelize.UUID,
//       },
//       musicalgenre_id: {
//         allowNull: false,
//         type: Sequelize.UUID,
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable("DjMusicalgenres");
//   },
// };