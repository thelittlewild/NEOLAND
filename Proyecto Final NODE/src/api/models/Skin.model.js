const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Esquema del modelo:

const SkinSchema = new Schema(
  {
    name: { type: String, unique: true, require: true },
    tier: {
      type: String,
      enum: ["Normal", "Legado", "Definitiva", "Legendaria", "Épica", "Rara"],
      require: true,
    },
    splashArt: { type: String, require: true }, //IMG
    usersFav: [
      {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: [],
      },
    ],
    champion: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Champion",
    },
    theme: {
      type: String,
      enum: [
        "Guardianas de las Estrellas",
        "PROYECTO",
        "Fiesta en la Piscina",
        "Campeonato",
        "Halloween",
        "Maravilla Helada",
        "Academia de Combate",
        "Estrella Oscura",
        "April Fools",
        "Domador de Dragones",
        "Matadragones",
        "KDA",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Skin = mongoose.model("Skin", SkinSchema);

module.exports = Skin;
