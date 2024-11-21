const Route = require('../models/Route');

exports.createRoute = async (req, res) => {
  const { start_location, end_location, distance } = req.body;

  try {
    const route = new Route({ start_location, end_location, distance });
    await route.save();
    res.status(201).json(route);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};