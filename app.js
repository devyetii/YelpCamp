//Dependencies
const express       = require("express");
const bodyParser    = require("body-parser");

//Express app
const app = express();

//configuration of body-parser
app.use(bodyParser.urlencoded({extended: true}));

//Views and public directory config
app.set("view engine", "ejs");
app.use(express.static("public"));

//Models
const Campground = require('./models/Campground');


//Landing Page
app.get("/", (req, res) => {
    res.render("home", {title: "Home"});
});

//Campgrounds Page
app.get("/campgrounds", (req, res) => {
    Campground.find().then((camps) => {
        res.render("campgrounds" , {title: "campgrounds", camps : camps});
    }).catch((err) => {
        res.send(`<h3>Error: ${err}</h3>`);
    });
});

//Add Campground form
app.get('/campgrounds/new', (req, res) => {
    res.render('new.ejs', {title: "New"});
});

//Post route of adding campground
app.post('/campgrounds', (req, res) => {
    let name    = req.body.name;
    let url     = req.body.image_url;
    let newCamp = { name: name, image_url: url};
    Campground.create(newCamp).then(() => {
        res.redirect('/campgrounds');
    }).catch((err) => {
        res.send(`<h3>Error: ${err}</h3>`);
    });
});

//Listening
app.listen(3000, () => {
    console.log("Listening at port 3000 ...");
});