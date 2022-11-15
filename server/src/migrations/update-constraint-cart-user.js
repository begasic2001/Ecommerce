module.exports = {
  up: async function (queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addConstraint("carts", {
      fields: ["user_id"],
      type: "foreign key",
      name: "carts_users",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.removeConstraint("carts", {
      fields: ["user_id"],
      type: "foreign key",
      name: "carts_users",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
};
