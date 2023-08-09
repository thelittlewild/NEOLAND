const multer = require("multer");
const cloudinary = requier("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv");

dotenv.config();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "MiniProyecto",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
  },
});

const upload = multer({ storage });

const deleteImgCloudinary = (imgUrl) => {
  const imgSplited = imgUrl.split("/");
  const nameSplited = imgSplited[imgSplited.length - 1].split(".");
  const folderSplited = imgSplited[imgSplited.length - 2];
  const public_id = `${folderSplited}/${nameSplited[0]}`;

  cloudinary.uploader.destroy(public_id, () => {
    console.log("Image delete in cloudinary");
  });
};

const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_APY_SECRET,
    api_key: process.env.CLOUDNARY_APY_KEY,
  });
};

module.exports = { upload, deleteImgCloudinary, configCloudinary };
