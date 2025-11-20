require('dotenv').config();
const mongoose = require('mongoose');

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

// Modelo
let Person = mongoose.model("Person", personSchema);

// Funciones de FCC (vacías por ahora)
const createAndSavePerson = (done) => {
  done(null);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null);
};

const findPeopleByName = (personName, done) => {
  done(null);
};

const findOneByFood = (food, done) => {
  done(null);
};

const findPersonById = (personId, done) => {
  done(null);
};

const findEditThenSave = (personId, done) => {
  done(null);
};

const findAndUpdate = (personName, done) => {
  done(null);
};

const removeById = (personId, done) => {
  done(null);
};

const removeManyPeople = (done) => {
  done(null);
};

const queryChain = (done) => {
  done(null);
};

// EXPORTS (FCC los usa)
exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.createManyPeople = createManyPeople;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;

exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
