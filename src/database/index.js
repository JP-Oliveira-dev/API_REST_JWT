const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/apiRest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.Promise = globalThis.Promise;

module.exports = mongoose;

