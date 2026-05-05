require("dotenv").config();
const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner.model.js");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    try {
      let owners = await ownerModel.find();

      if (owners.length > 0) {
        return res
          .status(503)
          .send("You don't have permission to create a new owner");
      }

      let { fullname, email, password } = req.body;

      // Validate required fields
      if (!fullname || !email || !password) {
        return res
          .status(400)
          .send("Missing required fields: fullname, email, password");
      }

      let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
      });

      res.status(201).send(createdOwner);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
}

router.get("/", function (req, res) {
  res.send("hey");
});

module.exports = router;
