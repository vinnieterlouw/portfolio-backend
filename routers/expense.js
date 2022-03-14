const { Router } = require("express");
const Expense = require("../models").expense;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const userWithExpenses = await User.findByPk(id, {
    include: [Expense],
  });

  if (userWithExpenses === null) {
    return res.status(404).send({ message: "No user and expenses found" });
  }

  res
    .status(200)
    .send({ message: "Found user and expenses", userWithExpenses });
});

router.post("/post/:userId", async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const { description, date, amount, status, category, payment_type } =
      req.body;

    const newExpense = await Expense.create({
      description,
      date,
      amount,
      status,
      category,
      payment_type,
      userId,
    });
    res.status(200).send(newExpense);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/editbalance/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const { balance } = req.body;

    const userById = await User.findByPk(id);
    if (!userById) {
      res.status(400).send("This is not correct");
    } else {
      const updateBalance = await userById.update({
        balance,
      });
      res.status(200).send(updateBalance);
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const expenses = await Expense.findAll({ where: { userId: userId } });
    if (!expenses) {
      return res.status(404).send("Expenses not found");
    }

    await expenses.forEach((expense) => expense.destroy());

    res.send({ message: "Delete succes", userId });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
