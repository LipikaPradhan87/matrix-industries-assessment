const express = require("express");
const fs = require("fs");
const path = require("path");
const { body, validationResult } = require("express-validator");

const router = express.Router();

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("company").notEmpty().withMessage("Company is required"),
    body("message").notEmpty().withMessage("Message is required"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const filePath = path.join(
      __dirname,
      "../data/submissions.json"
    );

    const existingData = JSON.parse(
      fs.readFileSync(filePath, "utf8")
    );

    existingData.push({
      ...req.body,
      submittedAt: new Date().toISOString(),
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify(existingData, null, 2)
    );

    res.status(200).json({
      success: true,
      message: "Submission stored successfully",
    });
  }
);

module.exports = router;