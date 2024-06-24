const express = require("express");
const router = express.Router();
const { campgroundSchema } = require("../ejsSchema")
// const Campgrounds = require("../models/campground");
const ExpressError = require("../utilites/ExpressError");
const wrapAsync = require("../utilites/wrapAsync");
const { isLoggedIn, isAuthor, validateCampground } = require("../utilites/middleware");
const { populate } = require("../models/review");
const Campground = require("../controllers/campground")
const multer = require("multer")
const { storage } = require("../cloudinary/cloudinary")
const upload = multer({ storage });


router.route("/")
    .get(Campground.index)
    .post(isLoggedIn, upload.array('image'), validateCampground, Campground.createCampground)
    

router.get("/new", isLoggedIn, Campground.renderCreateCampground)

router.get("/:id/edit", isLoggedIn, isAuthor, Campground.renderUpdateCampground)

router.route("/:id")
    .get(Campground.renderCampground)
    .put(isLoggedIn, isAuthor,upload.array('image'),validateCampground, Campground.updateCampground)
    .delete(isLoggedIn, isAuthor, Campground.deleteCampground)



module.exports = router;