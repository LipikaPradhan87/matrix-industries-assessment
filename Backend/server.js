const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");
const limiter = require("./middleware/rateLimiter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", limiter);
app.use("/api/contact", contactRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});