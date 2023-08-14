const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//esquema del modelo:
const ChampionSchema = new Schema(
  {
    name: { type: String, unique: true, require: true },
    gender: {
      type: String,
      enum: ["Masculino", "Femenino", "Otro"],
      require: true,
    },
    image: { type: String },
    region: {
      type: String,
      enum: [
        "Jonia",
        "Aguas Estancadas",
        "Freljord",
        "Demacia",
        "Ciudad de Bandle",
        "Islas de la Sombra",
        "El Vacío",
        "Shurima",
        "Piltover",
        "Noxus",
        "Targot",
        "Zaun",
        "Ixtal",
        "Desconocido",
      ],
      require: true,
    },
    rol: {
      type: String,
      enum: ["Tirador", "Mago", "Tanque", "Asesino", "Luchador", "Support"],
      require: true,
    },
    skins: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skin" }],
    userFav: [
      {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

//llamo al modelo:

const Champion = mongoose.model("Champion", ChampionSchema);

//lo exporto:
module.exports = Champion;
