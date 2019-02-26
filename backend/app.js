const express = require("express"),
  session = require("express-session"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  mongoose = require("mongoose"),
  methodOverride = require("method-override"),
  LocalStrategy = require("passport-local"),
  path = require("path"),
  flash = require("connect-flash"),
  app = express();

//Set port for local server
const PORT = 8080;

//Import Routes
const adminRoutes = require("./routes/api/admin/admin"),
  clientRoutes = require("./routes/api/client/client"),
  movieRoutes = require("./routes/api/movies/movies");

//Deine static files path
app.use(express.static(__dirname + "/public/"));
//Setup bpdy parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set view engine
app.set("view engine", "ejs");
//Following setting for adding sub-directories to views folder, while rendering files for eg: <directory-name/filename>
app.set("views", path.join(__dirname, "/views"));

app.use(methodOverride("_method"));

//Enable Use of Flash
app.use(flash());
//Enable Flash
app.use((req, res, next) => {
  res.locals.messages = require("express-messages")(req, res);
  next();
});
//use passport and set session
app.use(
  session({
    secret: "Login is necessary",
    resave: false,
    saveUninitialized: false,
    //Expires in one hour value given in milliseconds
    cookie: { _expires: 3600000 }
  })
);

// app.use(passport.initialize());
// //THis should always be declraed after express session
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));

//Prevent back button after logout
app.use((req, res, next) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  next();
});

// //Serialize and deserialize user
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//DB config

const db = require("./config/keys").mongoURI;

//Connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(success => console.log("Connected to Db", db.toUpperCase()))
  .catch(err => console.log(err));

// //Get current user
// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});

// All routes are started from here
app.use("/api/admin", adminRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/movies", movieRoutes);

//Listen to port
app.listen(PORT || process.env.PORT, err => {
  console.log("App is running at ", PORT);
});
