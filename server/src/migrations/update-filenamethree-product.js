module.exports = {
  up: function (queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn(
      "Products",
      "filename_three",
      Sequelize.STRING
    );
  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.addColumn(
      "Products",
      "filename_three",
      Sequelize.STRING
    );
  },
};
