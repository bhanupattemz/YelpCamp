const Review = require("../models/review")
const wrapAsync = require("../utilites/wrapAsync");
const { reviewSchema } = require("../ejsSchema");

module.exports.createReview = wrapAsync(async (req, res) => {
    const data = req.body;
    const { id } = req.params
    const campground = await Campground.findById(id)
    const newReview = new Review(data)
    newReview.author = req.user._id;
    campground.review.push(newReview)
    await newReview.save()
    await campground.save()
    req.flash("success", "saved review successfully")
    res.redirect(`/campgrounds/${id}`)
})

module.exports.deleteReview = wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { review: reviewId } })
    await Review.findByIdAndDelete(reviewId)
    req.flash("success", "deleted review successfully")
    res.redirect(`/campgrounds/${id}`)
})