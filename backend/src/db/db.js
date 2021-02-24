const mongoose = require("mongoose");

const connectDB = async () => {
  //async means it will return a promise because js is single threaded
  try {
    const conn = await mongoose.connect(
      //so that it doesn't return a promise
      process.env.DB_CONNECTION,
      { useNewUrlParser: true, useUnifiedTopology: true } //get rid of errors
    );
    console.log(`Connected to ${conn.connection.host}`); //Show once connected to db
  } catch (err) {
    console.log(`Error: ${err.message}`); // ` allows us to put vars in a string without +
    process.exit(1); //so that it exits once it doesn't connect to a database.
  }
};

module.exports = connectDB;
