const express = require("express"),
  session = require("express-session"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  mongoose = require("mongoose"),
  methodOverride = require("method-override"),
  LocalStrategy = require("passport-local"),
  path = require("path"),
  flash = require("connect-flash"),
  User = require("./models/user"),
  app = express();
//Import Models
const Movie = require("./models/movie");

//Set port for local server
const PORT = 8080;

//Import Routes
const adminRoutes = require("./routes/admin/admin"),
  clientRoutes = require("./routes/client/client"),
  loginRoute = require("./routes/authRoute/login"),
  registerRoute = require("./routes/authRoute/register"),
  movieRoutes = require("./routes/movies/movies");

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

app.use(passport.initialize());
//THis should always be declraed after express session
app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username })
      .then(user => {
        if (!user) {
          return done(null, false, { msg: "Incorrect Username" });
        } else {
          if (!user.password === password) {
            return done(null, false, { message: "Incorrect password." });
          }

          return done(null, user);
        }
      })
      .catch(err => done(err));
  })
);
//Prevent back button after logout
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  next();
});

//Serialize and deserialize user
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//DB config

const db = require("./config/keys").mongoURI;

//Connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(success => console.log("Connected to Db", db.toUpperCase()))
  .catch(err => console.log(err));

//Get current user
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.get("/home", (req, res) => {
  Movie.find({})
    .then(movie => {
      if (movie) {
        res.status(200).json(movie);
      } else {
        res.status(200).json({ Msg: "No Movie Found" });
      }
    })
    .catch(err => res.status(400).json(err));
});

// All routes are started from here
app.use("/admin", adminRoutes);
app.use("/client", clientRoutes);
app.use("/movies", movieRoutes);
app.use("/login", loginRoute);
app.use("/register", registerRoute);

//Listen to port
app.listen(PORT || process.env.PORT, err => {
  console.log("App is running at ", PORT);
});
