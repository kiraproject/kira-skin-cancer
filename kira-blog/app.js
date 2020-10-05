var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	Campground = require("./models/campground"),
	Comment = require("./models/comment"),
	passport = require("passport"),
	LocalStrategy = require("passport-local"),
	User = require("./models/user"),
	methodOverride = require("method-override"),
	flash = require("connect-flash");

// configure dotenv
require('dotenv').load();

// Requiring routes
var commentRoutes = require("./routes/comments"),
  campgroundRoutes = require("./routes/campgrounds"),
  indexRoutes = require("./routes/index");

// assign mongoose promise library and connect to database
mongoose.Promise = global.Promise;
mongoose.connect("***",{ useNewUrlParser: true } );

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// PASSPORT CONFIG
app.use(
  require("express-session")({
    secret: "shibas are the best dogs in the world.",
    resave: false,
    saveUninitialized: false
  })
);
app.locals.moment = require("moment");
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.get("*", function(req, res) {
  res.render("error");
});

app.listen(3000,process.env.PORT, process.env.IP, function(){
   console.log("The Server Has Started!");
});
