const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Champion = require("../models/Champion.model");
const Skin = require("../models/Skin.model");
const User = require("../models/user.model");

//?-----------------------------------------------------
//?------------------- POST create----------------------
//?-----------------------------------------------------

const createChampion = async (req, res, next) => {
  let catchImage = req.file?.path;
  try {
    await Champion.syncIndexes();
    const newChampion = new Champion(req.body);
    if (req.file) {
      newChampion.image = catchImage;
    } else {
      newChampion.image =
        "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
    }

    const savedChampion = await newChampion.save();

    if (!savedChampion) {
      return res
        .status(404)
        .json("No se ha podido guardar el campeón en la base de datos");
    }
    return res.status(200).json({ data: savedChampion });
  } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImage);
    return next(error);
  }
};

//?------------------------------------------------------
//?------------------- GetById---------------------------
//?------------------------------------------------------

const getChampionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const championById = await Champion.findById(id);
    if (championById) {
      return res.status(200).json({ data: championById });
    } else {
      res.status(404).json("champion not found");
    }
  } catch (error) {
    return next(error);
  }
};

//?----------------------------------------------------
//?------------------- GetAll--------------------------
//?----------------------------------------------------

const getAllChampion = async (req, res, next) => {
  try {
    const championAll = await Champion.find();

    if (championAll.length > 0) {
      return res.status(200).json({ data: championAll });
    } else {
      res.status(404).json("champion not found");
    }
  } catch (error) {
    return next(error);
  }
};

//?-------------------------------------------------------
//?------------------- GetByName--------------------------
//?-------------------------------------------------------

const getChampionByName = async (req, res, next) => {
  try {
    const { name } = req.query;
    const championByName = await Champion.find({ name });

    if (championByName.length > 0) {
      return res.status(200).json({ data: championByName });
    } else {
      res.status(404).json("champion not found");
    }
  } catch (error) {
    return next(error);
  }
};

//?------------------------------------------------------
//?------------------- GetByRol--------------------------
//?------------------------------------------------------

const getChampionByRol = async (req, res, next) => {
  try {
    const { rol } = req.query;
    const championByRol = await Champion.find({ rol });

    if (championByRol.length > 0) {
      return res.status(200).json({ data: championByRol });
    } else {
      res.status(404).json("champion not found");
    }
  } catch (error) {
    return next(error);
  }
};

//?------------------------------------------------------
//?------------------- GetByRegion-----------------------
//?------------------------------------------------------

const getChampionByRegion = async (req, res, next) => {
  try {
    const { region } = req.query;
    const championByRegion = await Champion.find({ region });

    if (championByRegion.length > 0) {
      return res.status(200).json({ data: championByRegion });
    } else {
      res.status(404).json("champion not found");
    }
  } catch (error) {
    return next(error);
  }
};

//?----------------------------------------------------
//?------------------- Update--------------------------
//?----------------------------------------------------

const updateChampion = async (req, res, next) => {
  let catchImage = req.file?.path;
  try {
    const { id } = req.params;

    const championById = await Champion.findById(id);
    if (championById) {
      const oldImage = championById.image;
      const customBody = {
        _id: championById._id,
        image: req.file?.path ? req.file?.path : championById.image,
        gender: req.body?.gender ? req.body?.gender : championById.gender,
        name: req.body?.name ? req.body?.name : championById.name,
        region: req.body?.region ? req.body?.region : championById.region,
        rol: req.body?.rol ? req.body?.rol : championById.rol,
      };
      await Champion.findByIdAndUpdate(id, customBody);
      if (req.file?.path) {
        deleteImgCloudinary(oldImage);
      }
      const updateNewChampion = await Champion.findById(id);
      const elementUpdate = Object.keys(req.body);
      let test = {};
      elementUpdate.forEach((item) => {
        if (req.body[item] == updateNewChampion[item]) {
          test[item] = true;
        } else {
          test[item] = false;
        }
        if (req.file) {
          updateNewChampion.image == req.file?.path
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
          update: updateNewChampion,
        });
      }
    } else {
      return res.status(404).json("champion not found");
    }
  } catch (error) {
    if (req.file) deleteImgCloudinary(catchImage);
    return next(error);
  }
};

//?----------------------------------------------------
//?-------------------Add & Delete Skin----------------
//?----------------------------------------------------

const addSkin = async (req, res, next) => {
  try {
    let arraySkins;
    const { id } = req.params;
    const { skins } = req.body;

    const championById = await Champion.findById(id);
    let updateChampion;
    //let updateChampion = [];
    if (championById) {
      arraySkins = skins.split(",");
      arraySkins.forEach(async (element) => {
        if (championById.skins.includes(element)) {
          try {
            await Champion.findByIdAndUpdate(id, {
              $pull: { skins: element },
            });
            updateChampion = await Champion.findById(id);
            try {
              await Skin.findByIdAndUpdate(element, {
                $pull: { champions: id },
              });

              const updateSkin = await Skin.findById(element);
              //updateSkin.push(updateSkin);
            } catch (error) {
              return res.status(404).json(error);
            }
          } catch (error) {
            return res.status(404).json(error);
          }
        } else {
          try {
            await Champion.findByIdAndUpdate(id, {
              $push: { skins: element },
            });
            updateChampion = await Champion.findById(id);
            try {
              await Skin.findByIdAndUpdate(element, {
                $push: { champions: id },
              });
              const updateSkin = await Skin.findById(element);
              //updateSkin.push(updateSkin);
              return res.status(200).json({ data: updateSkin });
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
          update: await Champion.findById(id).populate({
            path: "skins",
            populate: {
              path: "champions",
            },
          }),
        });
      }, 500);
    } else {
      return res.status(404).json("champion not found");
    }
  } catch (error) {
    return next(error);
  }
};

//?----------------------------------------------------
//?------------------- Delete--------------------------
//?----------------------------------------------------

const deleteChampion = async (req, res, next) => {
  try {
    const { id } = req.params;
    try {
      const championDelete = await Champion.findByIdAndDelete(id);
      const test = await Skin.updateMany(
        { champions: id },
        { $pull: { champions: id } }
      );

      if (test.modifiedCount === test.matchedCount) {
        try {
          const testUser = await User.updateMany(
            { championsFav: id },
            { $pull: { championsFav: id } }
          );

          if (testUser.modifiedCount === testUser.matchedCount) {
            return res.status(200).json({
              testOkDelete: (await Champion.findById(id)) ? false : true,
            });
          } else {
            return res.status(404).json({
              message: "error updating User model",
              skins: championDelete.champions,
              userFav: championDelete.userFav,
              idChampionDelete: id,
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
          skins: championDelete.skins,
          userFav: championDelete.userFav,
          idChampionDelete: id,
        });
      }
    } catch (error) {
      return res.status(404).json({
        error: "error delete champion",
        message: error.message,
        idChampion: id,
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
      await Skin.updateMany({ champions: id }, { $pull: { champions: id } });

      try {
        await User.updateMany(
          { championsFav: id },
          { $pull: { championsFav: id } }
        );

        return res.status(200).json("solve error ok");
      } catch (error) {
        return res.status(404).json({ message: error.message, idChampion: id });
      }
    } catch (error) {
      return res.status(404).json({ message: error.message, idChampion: id });
    }
  } catch (error) {
    return next({ message: error.message, idChampion: id });
  }
};

module.exports = {
  createChampion,
  getChampionById,
  getAllChampion,
  getChampionByName,
  getChampionByRol,
  getChampionByRegion,
  updateChampion,
  deleteChampion,
  errorsSolve,
  addSkin,
};
