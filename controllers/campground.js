const Campgrounds = require("../models/campground");
const wrapAsync = require("../utilites/wrapAsync");
const { cloudinary } = require("../cloudinary/cloudinary")

const maptilerClient = require("@maptiler/client");
maptilerClient.config.apiKey = process.env.MAPTILER_API_KEY;

module.exports.renderCampground = wrapAsync(async (req, res, next) => {
    
    const { id } = req.params
    let campground;
    try {
        campground = await Campgrounds.findById(id).populate({ path: "review", populate: { path: "author" } }).populate("author");
    } catch (err) {
        if (!campground) {
            req.flash("error", "campground not found");
            return res.redirect("/campgrounds");
        }
        next(err)
    }

    res.render("./campgrounds/show", { campground })
})

module.exports.index = wrapAsync(async (req, res) => {

    const data = await Campgrounds.find({}).populate("author");
    res.render("./campgrounds/index", { campgrounds: data });
})

module.exports.renderCreateCampground = (req, res) => {
    res.render("./campgrounds/new")
}


module.exports.createCampground = wrapAsync(async (req, res) => {
    const data = req.body
    const geoData = await maptilerClient.geocoding.forward(data.location, { limit: 1 });
    const newCampground = new Campgrounds({
        author: req.user._id,
        title: data.title,
        location: data.location,
        price: data.price,
        image: req.files.map(f => ({ fileName: f.filename, url: f.path })),
        description: data.description,
        geometry: geoData.features[0].geometry
    })
    await newCampground.save()

    req.flash("success", "Saved campground Successfully")
    res.redirect(`/campgrounds/${newCampground._id}`);
})


module.exports.renderUpdateCampground = wrapAsync(async (req, res) => {
    const { id } = req.params
    const campground = await Campgrounds.findById(id);
    res.render("./campgrounds/edit", { campground });
})

module.exports.updateCampground = wrapAsync(async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const img = req.files.map(f => ({ fileName: f.filename, url: f.path }));
    if (!data.image) {
        data.image = [];
    }
    const camp = await Campground.findById(id)
    let images = []
    const deleteImages = data.deleteImages
    if (deleteImages) {
        for (let image of camp.image) {
            if (deleteImages.indexOf(image.fileName) === -1) {
                images.push(image)
            }
        }
        for (let image of deleteImages) {
            await cloudinary.uploader.destroy(image);
        }

    } else { images = camp.image }
    data.image.push(...img, ...images);
    await Campground.findByIdAndUpdate(id, data);
    req.flash("success", "Updated campground successfully");
    res.redirect(`/campgrounds/${id}`);
})

module.exports.deleteCampground = wrapAsync(async (req, res) => {
    const { id } = req.params
    const campground = await Campgrounds.findOneAndDelete({ _id: id });
    if (campground.image) {
        for (let image of campground.image) {
            await cloudinary.uploader.destroy(image.fileName);
        }
    }
    req.flash("success", "deleted campground successfully")
    res.redirect("/campgrounds");

})

