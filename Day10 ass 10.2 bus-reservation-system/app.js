const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./utils/db");

dotenv.config();
connectDB();

const operatorRoutes = require("./routes/operatorRoutes");
const routeRoutes = require("./routes/routeRoutes");
const busRoutes = require("./routes/busRoutes");
const passengerRoutes = require("./routes/passengerRoutes");
const reservationRoutes = require("./routes/reservationRoutes");

const app = express();

app.use(bodyParser.json());
app.use("/api", operatorRoutes);
app.use("/api", routeRoutes);
app.use("/api", busRoutes);
app.use("/api", passengerRoutes);
app.use("/api", reservationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
