const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

// Welcome Page
router.get("/", forwardAuthenticated, (req, res) => res.render("welcome"));

// Dashboard
router.get("/admin", ensureAuthenticated, (req, res) =>
  res.render("admin", { name: req.user.name })
);

module.exports = router;
