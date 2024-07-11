const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const userModel = require("./models/user");
const user = require("./models/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});


app.get("/edit/:id", async (req, res) => {
  let id = req.params.id;
  let user = await userModel.findById(id);
  res.render("edit", { user });
});

app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let createdUser = await userModel.create({
    name,
    email,
    image,
  });
  res.redirect("/read");
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.render("read", { users });
});

app.post("/update/:id", async (req, res) => {
  let { name, email, image } = req.body;
  await userModel.findOneAndUpdate(
    { _id: req.params.id },
    {
      name,
      email,
      image,
    },
    { new: true }
  );
  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  let id = req.params.id;
  await userModel.findOneAndDelete(id);
  res.redirect("/read");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
