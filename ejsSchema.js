const baseJoi = require("joi");
const { base, validate } = require("./models/review");
const sanitizeHTML=require("sanitize-html")

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHTML(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) {
                    return helpers.error('string.escapeHTML', { value });
                }
                return clean;
            }
        }
    }
});

const Joi = baseJoi.extend(extension);

module.exports.campgroundSchema = Joi.object({
    campground: Joi.object({
        title: Joi.string().required().escapeHTML(),
        price: Joi.number().required().min(0),
        // image: Joi.array().items(Joi.object({
        //     fileName: Joi.string().required(),
        //     url: Joi.string().required()
        // })),
        description: Joi.string().required().escapeHTML(),
        location: Joi.string().required().escapeHTML(),
        reviews: Joi.array().items(Joi.string().required()),
        geometry: Joi.object({
            type: Joi.string().required,
            coordinates: Joi.array().required
        }),
        deleteImages: Joi.array()
    }).required()


});



module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        body: Joi.string().required().escapeHTML(),
        rating: Joi.number().required().min(0).max(5)
    }).required()
})