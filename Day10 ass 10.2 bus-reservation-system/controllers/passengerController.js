const Passenger = require('../models/Passenger');

exports.createPassenger = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const passenger = new Passenger({ name, email, phone });
    await passenger.save();
    res.status(201).json(passenger);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};