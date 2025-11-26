const express = require("express");
const { register, login, profile } = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// Registro
router.post("/register", register);

// Login
router.post("/login", login);

// Ruta protegida
router.get("/profile", authMiddleware, profile);

module.exports = router;
