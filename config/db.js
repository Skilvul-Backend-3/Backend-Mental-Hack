const mongoose = require('mongoose');

const DB_URL =
  'mongodb+srv://Mental-Hack:Mental-Hack@mental-hack.lmwpbi5.mongodb.net/mental_hack';

const db = mongoose.connect(DB_URL, {
  useNewUrlParser: true, // handle deprecated url
  useUnifiedTopology: true, // handle server deprecated
});

// // check connection opsi 2
// const checkdb = mongoose.connection;
// checkdb.on('error', (error) => console.log(error));
// checkdb.once('open', () => console.log("Database Connected.."))

module.exports = db;
