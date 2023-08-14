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

SkinRoutes.get("/", getAllSkin);
SkinRoutes.post("/", createSkin);
SkinRoutes.get("/byId/:id", getSkinById);
SkinRoutes.get("/byName", getSkinByName);
SkinRoutes.get("/byTier", getSkinByTier);
SkinRoutes.get("/byTheme", getSkinByTheme);
SkinRoutes.patch("/:id", updateSkin);
SkinRoutes.delete("/:id", deleteSkin);
SkinRoutes.put("/:id", addChampion);

module.exports = SkinRoutes;
