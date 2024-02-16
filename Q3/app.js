const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/users');

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  age: Number,
  country: String,
  password: String
});

UserSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

const User = mongoose.model('User', UserSchema);

app.get('/', (req, res) => {
  res.send('Hello, this is the home page');
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.post('/users', async (req, res) => {
  const { name, email, age, country, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send('Email already taken');

    const user = new User({ name, email, age, country, password });
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

app.put('/users/:id', async (req, res) => {
  const { name, email, age, country, password } = req.body;

  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');

    user.name = name;
    user.email = email;
    user.age = age;
    user.country = country;
    if (password) {
      user.password = password;
    }
    user = await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send('Error updating user');
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) res.status(404).send('User not found');
    res.status(200).send();
  } catch (error) {
    res.status(500).send('Error deleting user');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
