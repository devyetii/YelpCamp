const db = require('../config/db.js');

const Campground = db.model('Camp', {
    name: String,
    image_url: String,
    desc: String
});
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

//Creating new Camps
const camps = [
    {name : "Salmon Creek", image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtiiax3c_G7gA7er8Il2ykfVLqX36bGuntLpWBhVw8NCrc9Ckr", desc: lorem},
    {name : "Granite Hill", image_url : "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg"},
    {name : "Mountain Goat's Rest", image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6OAkMx02Vgb-inp1RwSWA6yqsWXGvPC-hqrZdmpQQx6cRgqs", desc: lorem},
    {name : "Salmon Creek", image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtiiax3c_G7gA7er8Il2ykfVLqX36bGuntLpWBhVw8NCrc9Ckr", desc: lorem},
    {name : "Granite Hill", image_url : "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg"},
    {name : "Mountain Goat's Rest", image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6OAkMx02Vgb-inp1RwSWA6yqsWXGvPC-hqrZdmpQQx6cRgqs", desc: lorem},
    {name : "Salmon Creek", image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtiiax3c_G7gA7er8Il2ykfVLqX36bGuntLpWBhVw8NCrc9Ckr", desc: lorem},
    {name : "Granite Hill", image_url : "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg"},
    {name : "Mountain Goat's Rest", image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6OAkMx02Vgb-inp1RwSWA6yqsWXGvPC-hqrZdmpQQx6cRgqs", desc: lorem},
];
camps.forEach((camp) => {
    var newCamp = new Campground(camp);
    newCamp.save().then(() => {console.log(newCamp)});
});

module.exports = Campground;