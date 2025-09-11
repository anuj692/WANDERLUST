const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const expressError = require("./utils/expressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingsRouter = require("./routs/lisitng.js");
const reviewsRouter = require("./routs/review.js");
const userRouter = require("./routs/user.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public"))); //to use css 

const sessionOption = { //once logged in  till 7 days cookie saved in browser and no login again
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}


app.get("/", (req, res) => {
    res.send("Hi, I am root");
});
app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

// app.get("/demouser", async(req,res)=>{
//   let fakeuser = new User({
//     email:"ajaykumar45@gmail.com",
//     username: "Ajay Rawat",
//   });
//   let registeredUser = await User.register(fakeuser,"helloworld");
//   res.send(registeredUser);
// })

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter); //its parent route
app.use("/", userRouter);




app.all("*", (req, res, next) => { //check all routes if not match
        next(new expressError(404, "page not found"));
    })
    //middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err; //if no statuscode assign then 500
    res.status(statusCode).render("error.ejs", { message });

    // res.status(statusCode).send(message);
})




app.listen(3000, () => {
    console.log("server is listening to port 8080");
});