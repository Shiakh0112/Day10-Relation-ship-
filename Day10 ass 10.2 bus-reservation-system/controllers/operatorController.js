const Operator = require('../models/Operator');

exports.createOperator = async (req, res) => {
  const { name, contact_info } = req.body;

  try {
    const operator = new Operator({ name, contact_info });
    await operator.save();
    res.status(201).json(operator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};