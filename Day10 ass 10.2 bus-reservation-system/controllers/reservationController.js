const Reservation = require('../models/Reservation');
const Bus = require('../models/Bus');
const Passenger = require('../models/Passenger');

exports.createReservation = async (req, res) => {
  const { busId, passengerId, seat_number } = req.body;

  try {
    const bus = await Bus.findById(busId);
    if (seat_number > bus.capacity)
      return res.status(400).json({ message: 'Seat number exceeds capacity' });

    const reservation = new Reservation({ bus: busId, passenger: passengerId, seat_number });
    await reservation.save();

    bus.reservations.push(reservation._id);
    await bus.save();

    const passenger = await Passenger.findById(passengerId);
    passenger.reservations.push(reservation._id);
    await passenger.save();

    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};