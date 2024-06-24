const mongoose = require("mongoose");
const Review = require("./review");
const { required } = require("joi");
const { coordinates } = require("@maptiler/client");
const Schema = mongoose.Schema;

const opts={toJson:{virtuals:true}}
const makecampground = new Schema({
    title: String,
    price: Number,
    geometry:{
        type:{
            type:String,
            required:true
        },
        coordinates:{
            type:[Number],
            required:true
        }
    },
    image: [{
        fileName: String,
        url: String
    }],
    description: String,
    location: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }]
},opts)

makecampground.virtual("properties.popUpMarkup").get(function(){
    return `<a href="/campgrounds/${this._id}">${this.title}</a>`
})
makecampground.post("findOneAndDelete", async (campground) => {
    if (campground) {
        try {
            const res = await Review.deleteMany({ _id: { $in: campground.review } });
            console.log(res)
        } catch (error) {
            console.log(error)
        }

    }
})

Campground = mongoose.model("Campground", makecampground);

module.exports = Campground;
