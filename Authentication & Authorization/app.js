const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 3000;
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
const userModel = require("./models/user");
const user = require("./models/user");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  let { username, email, password, age } = req.body;

  bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(password, salt, async (err, hash) => {
      let createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });

      let token = jwt.sign({ email }, "secret");
      res.cookie("token", token);

      res.redirect("/login");
    });
  });
});

app.get("/login", async (req, res) => {
  res.render("login");
});
app.post("/login", async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if(!user)
    return res.send('something went wrong');
  bcryptjs.compare(req.body.password, user.password, (err, result) => {
    if(result){
      let token = jwt.sign({
        email: user.email
      }, 'secret')
      res.cookie('token', token)
      res.send('Logged in')

    }
  else
  res.send('something went wrong')
  })
});
app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

// -------------------------------------------------------------------------------------------------------

// app.get("/", (req, res) => {
//   let token = jwt.sign({ email: "ramish@example.com" }, "secret");
//   res.cookie("token", token);
//   console.log(token);
//   let data = jwt.verify(token, "secret");
//   console.log(data);
//   res.send("done");
// });

// app.get('/', (req, res) => {
//     res.cookie('name','Ramish');
//     res.send('done')
//     }
// );

// app.get('/read', (req, res) => {
//     console.log(req.cookies)
//     res.send('rp')
//     }
// );

// app.get('/', (req, res) => {
//     bcryptjs.genSalt(10, function(err, salt) {
//         bcryptjs.hash('123456', salt, function(err, hash) {
//             bcryptjs.compare('123456', hash, function(err, result) {
//                 console.log(result);
//             });
//             res.send('helo');
//     });
//     });
// }
// );

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
