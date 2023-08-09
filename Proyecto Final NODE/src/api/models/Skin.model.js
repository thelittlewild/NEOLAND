const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Esquema del modelo:

const SkinSchema = new Schema(
  {
    name: { type: String, unique: true, require: true },
    tier: {
      type: String,
      enum: ["Legado", "Definitiva", "Legendaria", "Épica", "Rara"],
      require: true,
    },
    splashArt: { type: String, require: true }, //IMG
    //userFav
    //championSkin
    tematica: {
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
        "",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Skin = mongoose.model("Skin", SkinSchema);

module.exports = Skin;
