// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// require('dotenv').config();
// console.log(process.env.CLOUDINARY_CLOUD_NAME)
// async function cloud(req,res,next) {


//     cloudinary.config({
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//         api_key: process.env.CLOUDINARY_KEY,
//         api_secret: process.env.CLOUDINARY_SECRET // Click 'View Credentials' below to copy your API secret
//     });
//     const uploadResult = await cloudinary.uploader
//     .upload(
//         req.image, {
//         public_id: 'evoflox',
//     }
//     )
//     .catch((error) => {
//         console.log(error);
//     });


//     console.log(uploadResult);

// }
// module.exports=cloud









// const cloudinary = require("cloudinary");
// const { CloudinaryStorage } = require("multer-storage-cloudinary")

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET
// });

// const storage = new CloudinaryStorage({
//     cloudinary,
//     folder: "YelpCamp",
//     allowedFormats: ['jpeg', 'jpg', 'png']
// })

// console.log(uploadResult);


// module.exports = { cloudinary, storage }












const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require('dotenv').config();  // Ensure this is called to load environment variables

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "YelpCamp",
        allowedFormats: ['jpeg', 'jpg', 'png']
    }
});

module.exports = { cloudinary, storage };
