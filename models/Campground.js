const db = require('../config/db.js');

const Campground = db.model('Camp', { name: String, image_url: String});


// //Creating new Camps
// const camps = [
//     {name : "Salmon Creek", image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtiiax3c_G7gA7er8Il2ykfVLqX36bGuntLpWBhVw8NCrc9Ckr"},
//     {name : "Granite Hill", image_url : "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg"},
//     {name : "Mountain Goat's Rest", image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6OAkMx02Vgb-inp1RwSWA6yqsWXGvPC-hqrZdmpQQx6cRgqs"},
//     {name : "Salmon Creek", image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtiiax3c_G7gA7er8Il2ykfVLqX36bGuntLpWBhVw8NCrc9Ckr"},
//     {name : "Granite Hill", image_url : "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg"},
//     {name : "Mountain Goat's Rest", image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6OAkMx02Vgb-inp1RwSWA6yqsWXGvPC-hqrZdmpQQx6cRgqs"},
//     {name : "Salmon Creek", image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtiiax3c_G7gA7er8Il2ykfVLqX36bGuntLpWBhVw8NCrc9Ckr"},
//     {name : "Granite Hill", image_url : "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg"},
//     {name : "Mountain Goat's Rest", image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6OAkMx02Vgb-inp1RwSWA6yqsWXGvPC-hqrZdmpQQx6cRgqs"},
// ];
// camps.forEach((camp) => {
//     var newCamp = new Campground(camp);
//     newCamp.save().then(() => {console.log(newCamp)});
// });

module.exports = Campground;