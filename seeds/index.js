const mongoose = require("mongoose");
const campground = require("../models/campground");
const cities = require("./cities")
const { descriptors, places } = require("./seedHelpers");
const { coordinates } = require("@maptiler/client");

mongoose.connect('mongodb://127.0.0.1:27017/Yelp')
    .then(() => {
        console.log("connected success!!!")
    })
    .catch(
        e => {
            console.log(e)
        })

const sample = arr => Math.floor(Math.random() * arr.length)
async function seedDB() {
    await campground.deleteMany({});
    for (let i = 0; i < 100; i++) {
        const randPrice = Math.floor(Math.random() * 20000 + 1000)
        const camp = new campground({
            geometry:{
                type:"Point",
                coordinates:[cities[i].longitude,cities[i].latitude]
            },
            author: "667171bfe41b74e36dd51a04",
            title: cities[i].campName,
            location: `${cities[i].city},${cities[i].state}`,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nisl eget libero dignissim finibus id sit amet risus. Integer fringilla arcu malesuada convallis tincidunt. In sed feugiat purus",
            image: [
                {
                    fileName: 'YelpCamp/hp1bmdduy8zgrllwujcu',
                    url: 'https://res.cloudinary.com/dvitufcfs/image/upload/v1718874582/YelpCamp/hp1bmdduy8zgrllwujcu.jpg',
                }
            ],
            price: randPrice
        })
        await camp.save()
    }

}



seedDB().then(() => {
    mongoose.connection.close();
})
