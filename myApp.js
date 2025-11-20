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


const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Yuzu",
    age: 20,
    favoriteFoods: ["ramen", "sushi", "burrito"]
  });

  person.save((err, data) => {
    if (err) return done(err);
    return done(null, data);
  });
};


const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return done(err);
    return done(null, data);
  });
};


const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    if (err) return done(err);
    return done(null, data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) return done(err);
    return done(null, data);
  });
};


const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) return done(err);
    return done(null, data);
  });
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
