const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const logRequest = require('./middleware');
const userRoutes = require('./routes/userRoutes');
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());


mongoose.connect(MONGO_URL);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});



app.use(logRequest);
app.use('/user', userRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
