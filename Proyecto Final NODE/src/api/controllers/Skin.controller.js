const {
  deleteImgCloudinary,
} = require("../../../../NODE/MiniProyecto0307/src/middleware/files.middleware");
const Champion = require("../models/Champion.model");
const Skin = require("../models/Skin.model");
const User = require("../models/user.model");

//?-----------------------------------------------------
//?------------------- CREATE---------------------------
//?-----------------------------------------------------

const createSkin = async (req, res, next) => {
  let catchImage = req.file?.path;
  try {
    await Skin.syncIndexes();
    const newSkin = new Skin(req.body);
    if (req.file) {
      newSkin.image = catchImage;
    } else {
      newSkin.image =
        "https://res.cloudinary.com/drt000pht/image/upload/v1691743666/6804159_wt6dcz.png";
    }
    const savedSkin = await newSkin.save();

    if (savedSkin) {
      return res
        .status(404)
        .json("No se ha podido guardar la skin en la base de datos");
    }
  } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImage);
    return next(error);
  }
};

//?------------------------------------------------------
//?------------------- GetById---------------------------
//?------------------------------------------------------

const getSkinById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const skinById = await Skin.findById(id);
    if (skinById) {
      return res.status(200).json({ data: skinById });
    } else {
      res.status(404).json("skin not found");
    }
  } catch (error) {
    return next(error);
  }
};

//?----------------------------------------------------
//?------------------- GetAll--------------------------
//?----------------------------------------------------

const getAllSkin = async (req, res, next) => {
  try {
    const skinAll = await Skin.find();

    if (skinAll.length > 0) {
      return res.status(200).json({ data: skinAll });
    } else {
      res.status(404).json("skin not found");
    }
  } catch (error) {
    return next(error);
  }
};

//?-------------------------------------------------------
//?------------------- GetByName--------------------------
//?-------------------------------------------------------

const getSkinByName = async (req, res, next) => {
  try {
    const { name } = req.query;
    const skinByName = await Skin.find({ name });

    if (skinByName.length > 0) {
      return res.status(200).json({ data: skinByName });
    } else {
      res.status(404).json("skin not found");
    }
  } catch (error) {
    return next(error);
  }
};

//?------------------------------------------------------
//?------------------- GetByTier-------------------------
//?------------------------------------------------------

const getSkinByTier = async (req, res, next) => {
  try {
    const { tier } = req.query;
    const skinByTier = await Skin.find({ tier });

    if (skinByTier.length > 0) {
      return res.status(200).json({ data: skinByTier });
    } else {
      res.status(404).json("skin not found");
    }
  } catch (error) {
    return next(error);
  }
};

//?------------------------------------------------------
//?------------------- GetByTheme------------------------
//?------------------------------------------------------

const getSkinByTheme = async (req, res, next) => {
  try {
    const { theme } = req.query;
    const skinByTheme = await Skin.find({ theme });

    if (skinByTheme.length > 0) {
      return res.status(200).json({ data: skinByTheme });
    } else {
      res.status(404).json("skin not found");
    }
  } catch (error) {
    return next(error);
  }
};

//?----------------------------------------------------
//?------------------- Update--------------------------
//?----------------------------------------------------

const updateSkin = async (req, res, next) => {
  let catchImage = req.file?.path;
  try {
    const { id } = req.params;

    const skinById = await Skin.findById(id);
    if (skinById) {
      const oldImage = skinById.image;
      const customBody = {
        _id: skinById._id,
        image: req.file?.path ? req.file?.path : skinById.image,
        gender: req.body?.gender ? req.body?.gender : skinById.gender,
        name: req.body?.name ? req.body?.name : skinById.name,
      };
      await Skin.findByIdAndUpdate(id, customBody);
      if (req.file?.path) {
        deleteImgCloudinary(oldImage);
      }
      const updateNewSkin = await Skin.findById(id);
      const elementUpdate = Object.keys(req.body);
      let test = {};
      elementUpdate.forEach((item) => {
        if (req.body[item] == updateNewSkin[item]) {
          test[item] = true;
        } else {
          test[item] = false;
        }
        if (req.file) {
          updateNewSkin.image == req.file?.path
            ? (test = { ...test, file: true })
            : (test = { ...test, file: false });
        }
      });
      let acc = 0;
      for (let clave in test) {
        if (test[clave] == false) acc++;
      }
      if (acc > 0) {
        return res.status(404).json({
          dataTest: test,
          update: false,
        });
      } else {
        return res.status(200).json({
          dataTest: test,
          update: updateNewSkin,
        });
      }
    } else {
      return res.status(404).json("skin not found");
    }
  } catch (error) {
    if (req.file) deleteImgCloudinary(catchImage);
    return next(error);
  }
};

//?----------------------------------------------------
//?-------------------Add & Delete Champion------------
//?----------------------------------------------------

const addChampion = async (req, res, next) => {
  try {
    let arrayChampions;
    const { id } = req.params;
    const { champions } = req.body;

    const skinById = await Skin.findById(id);
    let updateSkin;
    //let updateChampion = [];
    if (skinById) {
      arrayChampions = champions.split(",");
      arrayChampions.forEach(async (element) => {
        if (skinById.champions.includes(element)) {
          try {
            await Skin.findByIdAndUpdate(id, {
              $pull: { champions: element },
            });
            updateSkin = await Skin.findById(id);
            try {
              await Champion.findByIdAndUpdate(element, {
                $pull: { skins: id },
              });

              const updateChampion = await Champion.findById(element);
              //updateChampion.push(updateChampion);
            } catch (error) {
              return res.status(404).json(error);
            }
          } catch (error) {
            return res.status(404).json(error);
          }
        } else {
          try {
            await Skin.findByIdAndUpdate(id, {
              $push: { characters: element },
            });
            updateSkin = await Skin.findById(id);
            try {
              await Champion.findByIdAndUpdate(element, {
                $push: { skins: id },
              });
              const updateChampion = await Champion.findById(element);
              //updateChampion.push(updateChar);
            } catch (error) {
              return res.status(404).json(error);
            }
          } catch (error) {
            return res.status(404).json(error);
          }
        }
      });

      setTimeout(async () => {
        return res.status(200).json({
          update: await Movie.findById(id).populate({
            path: "champions",
            populate: {
              path: "movies",
            },
          }),
        });
      }, 500);
    } else {
      return res.status(404).json("movie not found");
    }
  } catch (error) {
    return next(error);
  }
};

//?----------------------------------------------------
//?------------------- Delete--------------------------
//?----------------------------------------------------

const deleteSkin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const skinDelete = await Skin.findByIdAndDelete(id);
    try {
      const test = await Champion.updateMany(
        { skins: id },
        { $pull: { skins: id } }
      );

      if (test.modifiedCount === test.matchedCount) {
        try {
          const testUser = await User.updateMany(
            { skinsFav: id },
            { $pull: { skinsFav: id } }
          );

          if (testUser.modifiedCount === testUser.matchedCount) {
            return res.status(200).json({
              testOkDelete: (await Skin.findById(id)) ? false : true,
            });
          } else {
            return res.status(404).json({
              message: "error updating User model",
              champions: skinDelete.skins,
              userFav: skinDelete.userFav,
              idSkinDelete: id,
            });
          }
        } catch (error) {
          return res
            .status(404)
            .json({ error: "failed updating users", message: error.message });
        }
      } else {
        return res.status(404).json({
          message: "error updating Skin model",
          champions: skinDelete.champions,
          userFav: skinDelete.userFav,
          idSkinDelete: id,
        });
      }
    } catch (error) {
      return res.status(404).json({
        error: "error delete skin",
        message: error.message,
        idSkin: id,
      });
    }
  } catch (error) {
    return next(error);
  }
};

const errorsSolve = async (req, res, next) => {
  const { id } = req.params;
  try {
    try {
      await Champion.updateMany({ skins: id }, { $pull: { skins: id } });

      try {
        await User.updateMany({ skinsFav: id }, { $pull: { skinsFav: id } });

        return res.status(200).json("solve error ok");
      } catch (error) {
        return res.status(404).json({ message: error.message, idSkin: id });
      }
    } catch (error) {
      return res.status(404).json({ message: error.message, idSkin: id });
    }
  } catch (error) {
    return next({ message: error.message, idSkin: id });
  }
};

module.exports = {
  createSkin,
  getSkinById,
  getAllSkin,
  getSkinByName,
  updateSkin,
  deleteSkin,
  errorsSolve,
  addChampion,
  getSkinByTier,
  getSkinByTheme,
};
