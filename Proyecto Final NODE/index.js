const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const { connect } = require("./src/utils/db");
connect();

const { configCloudinary } = require("./src/middleware/files.middleware");

configCloudinary();

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

//creo el servidor:
const app = express();

// limitaciones de datos

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

// ROUTES------------
const UserRoutes = require("./src/api/routes/user.routes");
const ChampionRoutes = require("./src/api/routes/Champion.routes");
const SkinRoutes = require("./src/api/routes/Skin.routes");

app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/champions", ChampionRoutes);
app.use("/api/v1/skins", SkinRoutes);

//Cuando no se mete ninguna ruta:
app.use("*", (req, res, next) => {
  const error = new Error("Ruta no encontrada");
  error.status = 404;
  return next(error);
});

//! ERRO 500 DEL SERVER
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Error inesperado");
});

// escucha al puerto
app.disable("x-powered-by");
app.listen(PORT, () => {
  console.log(
    `Servidor escuchando en el puerto ${PORT}, en ${BASE_URL}${PORT}`
  );
});
