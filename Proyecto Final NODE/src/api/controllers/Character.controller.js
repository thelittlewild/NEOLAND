const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Character = require("../models/Character.model");

const createCharacter = async (req, res, next) => {
  let catchImage = req.file?.path;
  try {
    await Character.syncIndexes(); //sincroniza los index
    const newCharacter = new Character(req.body);

    if (req.file) {
      newCharacter.image = catchImage;
    } else {
      newCharacter.image =
        "https://res.cloudinary.com/drt000pht/image/upload/v1691297483/Default_pfp.svg_liwpvt.png";
    }
    //guardamos el character
    const savedCharacter = await newCharacter.save();

    if (savedCharacter) {
      return res.status(200).json(savedCharacter); //200 porque existe, se ha guardado correctamente
    } else {
      return res
        .status(404)
        .json("Error al guardar Chartacter en la base de datos");
    }
  } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImage);
    return next(error);
  }
};

module.exports = { createCharacter };
