var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

//Landing Page
app.get("/", (req, res) => {
    res.render("home", {title: "Home"});
});

//Campgrounds Page
app.get("/campgrounds", (req, res) => {
    var camps = [
        {name : "Salmon Creek", url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtiiax3c_G7gA7er8Il2ykfVLqX36bGuntLpWBhVw8NCrc9Ckr"},
        {name : "Granite Hill", url : "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg"},
        {name : "Mountain Goat's Rest", url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6OAkMx02Vgb-inp1RwSWA6yqsWXGvPC-hqrZdmpQQx6cRgqs"},
    ];
    res.render("campgrounds" , {title: "campgrounds", camps : camps});
});

app.post('/campgrounds', (req, res) => {
    
})

//Listening
app.listen(3000, () => {
    console.log("Listening at port 3000 ...");
});