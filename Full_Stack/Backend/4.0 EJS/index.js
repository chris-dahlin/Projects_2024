import express from "express";

const app = express();
const port = 3000;

  
app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    console.log(day);
    // 2024-03-07T20:23:46.514Z
    // console.log(today);

    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "it's time to have some fun";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
