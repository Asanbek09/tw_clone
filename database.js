const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

class Database {

  constructor() {
    this.connect();
  }

  connect() {
    mongoose.connect("mongodb://localhost:27017/twitter")
    .then(() => {
      console.log("database connection successful");
    })
    .catch((err) => {
      console.log("database connection error " + err)
    })
  }
}

module.exports = new Database();