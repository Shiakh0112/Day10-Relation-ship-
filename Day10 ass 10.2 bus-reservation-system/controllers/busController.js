const Bus = require('../models/Bus');

exports.createBus = async (req, res) => {
  const { bus_number, capacity, operatorId, routeId } = req.body;

  try {
    const bus = new Bus({ bus_number, capacity, operator: operatorId, route: routeId });
    await bus.save();
    res.status(201).json(bus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};