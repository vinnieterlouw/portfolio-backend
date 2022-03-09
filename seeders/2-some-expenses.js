"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "expenses",
      [
        {
          description: "New Jacket",
          date: "2022-03-05",
          amount: 100.0,
          status: "Needs",
          category: "Clothing",
          payment_type: "Cash",
          userId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Bought Dinner",
          date: "2022-03-01",
          amount: 50.0,
          status: "Needs",
          category: "Groceries",
          payment_type: "PIN",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Take out",
          date: "2022-03-02",
          amount: 20.0,
          status: "Wants",
          category: "Food",
          payment_type: "Cash",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "New Shoes",
          date: "2022-03-06",
          amount: 150.0,
          status: "Needs",
          category: "Clothing",
          payment_type: "PIN",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("expenses", null, {});
  },
};
