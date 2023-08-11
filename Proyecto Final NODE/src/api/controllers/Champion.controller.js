const {
  deleteImgCloudinary,
} = require("../../../../NODE/MiniProyecto0307/src/middleware/files.middleware");
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

    if (savedChampion) {
      return res
        .status(404)
        .json("No se ha podido guardar el campeón en la base de datos");
    }
  } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImage);
    return next(error);
  }
};

//?------------------------------------------------------
//?------------------- GetById---------------------------
//?------------------------------------------------------

const getById = async (req, res, next) => {
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

const getAll = async (req, res, next) => {
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

const getByName = async (req, res, next) => {
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

const getByRol = async (req, res, next) => {
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
//?------------------- Delete--------------------------
//?----------------------------------------------------

const deleteChampion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const championDelete = await Champion.findByIdAndDelete(id);
    try {
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
              skins: championDelete.movies,
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
  getById,
  getAll,
  getByName,
  getByRol,
  updateChampion,
  deleteChampion,
  errorsSolve,
};
