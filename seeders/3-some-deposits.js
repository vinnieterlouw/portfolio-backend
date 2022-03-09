"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "deposits",
      [
        {
          date: "2022-02-24",
          amount: 2000.0,
          deposit_type: "salary",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2022-01-24",
          amount: 2000.0,
          deposit_type: "salary",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2022-02-23",
          amount: 1500.0,
          deposit_type: "salary",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2022-01-23",
          amount: 1500.0,
          deposit_type: "salary",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("deposits", null, {});
  },
};
