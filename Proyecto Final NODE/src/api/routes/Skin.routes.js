const {
  createSkin,
  updateSkin,
  deleteSkin,
  getSkinById,
  getAllSkin,
  getSkinByName,
  addChampion,
  getSkinByTheme,
  getSkinByTier,
} = require("../controllers/Skin.controller");

const Skin = require("../models/Skin.model");

const SkinRoutes = require("express").Router();

SkinRoutes.post("/", createSkin);
SkinRoutes.get("/:id", getSkinById);
SkinRoutes.get("/", getAllSkin);
SkinRoutes.get("/byName", getSkinByName);
SkinRoutes.get("/byTier", getSkinByTier);
SkinRoutes.get("/byTheme", getSkinByTheme);
SkinRoutes.patch("/:id", updateSkin);
SkinRoutes.delete("/:d", deleteSkin);
SkinRoutes.put("/:id", addChampion);

module.exports = SkinRoutes;
