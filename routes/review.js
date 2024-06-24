const express = require("express");
const router = express.Router({ mergeParams: true });
const ExpressError = require("../utilites/ExpressError");
const { isLoggedIn, isReviewAuthor,validateReview } = require("../utilites/middleware")
const Review = require("../controllers/review")
const { reviewSchema } = require("../ejsSchema");

router.post("/", isLoggedIn, validateReview, Review.createReview)

router.delete("/:reviewId", isLoggedIn, isReviewAuthor, Review.deleteReview)

module.exports = router;
