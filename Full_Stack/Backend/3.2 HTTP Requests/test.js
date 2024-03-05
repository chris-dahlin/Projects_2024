import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello!!!</h1>");
  console.log(req.rawHeaders);
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is Chris</p>");
  });
  
  app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: +4016100817</p>");
  });


app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});