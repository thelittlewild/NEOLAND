const { isAuth, isAuthAdmin } = require('../../middleware/auth.middleware');
const { upload } = require('../../middleware/files.middleware');
const {
	autoLogin,
	registerSlow,
	resendCode,
	login,
	changePassword,
	sendPassword,
	modifyPassword,
	update,
	deleteUser,
	checkNewUser,
	toggleFavChampion,
	toggleFavSkin,
	guessUserRol,
	userTopSkinOwner,
} = require('../controllers/user.controller');

const express = require('express');
const UserRoutes = express.Router();

UserRoutes.post('/register', upload.single('image'), registerSlow);
UserRoutes.post('/resend', resendCode);
// le ponemos dos veces forgotpassword para que choque con otro get con un solo /
UserRoutes.patch('/forgotpassword/forgotpassword', changePassword);
UserRoutes.post('/login', login);
UserRoutes.post('/login/autologin', autoLogin);
UserRoutes.patch('/changepassword', [isAuth], modifyPassword);
UserRoutes.patch('/update/:id', [isAuth], upload.single('image'), update);
UserRoutes.delete('/:id', [isAuth], deleteUser);
UserRoutes.post('/check', checkNewUser);
UserRoutes.patch('/championfav', toggleFavChampion);
UserRoutes.patch('/skinfav', toggleFavSkin);
UserRoutes.get('/guessUserRol/:id', guessUserRol);
UserRoutes.get('/topSkinOwners', userTopSkinOwner);

//?------------------- REDIRECT-------------------------

UserRoutes.patch('/sendPassword/:id', sendPassword);
module.exports = UserRoutes;
