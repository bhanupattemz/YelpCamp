const Campgrounds = require("../models/campground");
const Review = require("../models/review");
const flash = require("connect-flash");
const express = require('express')
const { campgroundSchema, reviewSchema } = require("../ejsSchema")
const ExpressError = require("./ExpressError")

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl; // add this line
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}


module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}

module.exports.isAuthor = async (req, res, next) => {
    const { id } = req.params
    const campground = await Campgrounds.findById(id);
    if (!campground.author.equals(req.user._id)) {
        req.flash("error", "You have no permitions")
        return res.redirect(`/campgrounds/${id}`)
    } next()
}


module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params
    const review = await Review.findById(reviewId);
    if (!review.author.equals(req.user._id)) {
        req.flash("error", "You have no permitions")
        return res.redirect(`/campgrounds/${id}`)
    } next()
}

module.exports.validateCampground = function (req, res, next) {

    const { error } = campgroundSchema.validate({ campground: req.body }, { abortEarly: false }); // Ensure all errors are collected
    if (error) {
        const msg = error.details.map(el => el.message).join(",");
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}


module.exports.validateReview = function (req, res, next) {
    const { error } = reviewSchema.validate({ review: req.body }, { abortEarly: false })
    if (error) {
        const msg = error.details.map(el => el.message).join(",");
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}