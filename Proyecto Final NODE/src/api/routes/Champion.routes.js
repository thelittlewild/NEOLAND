const {
  createChampion,
  updateChampion,
  deleteChampion,
  getAllChampion,
  getChampionById,
  getChampionByRol,
  getChampionByName,
  addSkin,
  getChampionByRegion,
} = require("../controllers/Champion.controller");

const Champion = require("../models/Champion.model");

const ChampionRoutes = require("express").Router();

ChampionRoutes.post("/", createChampion);
ChampionRoutes.get("/:id", getChampionById);
ChampionRoutes.get("/", getAllChampion);
ChampionRoutes.get("/byName", getChampionByName);
ChampionRoutes.get("/byRol", getChampionByRol);
ChampionRoutes.get("/byRegion", getChampionByRegion);
ChampionRoutes.patch("/:id", updateChampion);
ChampionRoutes.delete("/:id", deleteChampion);
ChampionRoutes.put("/:id", addSkin);

module.exports = ChampionRoutes;
