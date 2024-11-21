const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  start_location: { type: String, required: true },
  end_location: { type: String, required: true },
  distance: { type: Number, required: true },
  buses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bus' }],
});

module.exports = mongoose.model('Route', routeSchema);