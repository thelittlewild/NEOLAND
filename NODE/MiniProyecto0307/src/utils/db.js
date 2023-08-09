const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const { nam, host } = db.connection;
    console.log(
      `Conectada a la base de datos en el host: ${host}🚀 con el nombre: ${name} `
    );
  } catch (error) {
    console.log(
      `No se ha podido conectar a la base de datos❌, ERROR: ${error}`
    );
  }
};

module.exports = { connect };
