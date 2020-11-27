const cors = require("cors");
const fetch = require("node-fetch");
const express = require("express");

const app = express();
app.use(cors());

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("FPL Api Helper");
});
app.get("/static", async (req, res) => {
  try {
    let url = "https://fantasy.premierleague.com/api/bootstrap-static/";

    console.log(url);
    let data = await fetch(url, {
      method: "GET",
      headers: {
        "user-agent": "Mozilla/4.0 MDN Example",
        "content-type": "application/json",
      },
    });
    data = await data.json();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/gwteam/:id/gw/:gw", async (req, res) => {
  try {
    let url =
      "https://fantasy.premierleague.com/api/entry/" +
      req.params.id +
      "/event/" +
      req.params.gw +
      "/picks/";

      let data = await fetch(url, {
        method: "GET",
        headers: {
          "user-agent": "Mozilla/4.0 MDN Example",
          "content-type": "application/json",
        },
      });
      data = await data.json();
      res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/transfers/:id", async (req, res) => {
  try {
    let url =
      "https://fantasy.premierleague.com/api/entry/" +
      req.params.id +
      "/transfers/";
      let data = await fetch(url, {
        method: "GET",
        headers: {
          "user-agent": "Mozilla/4.0 MDN Example",
          "content-type": "application/json",
        },
      });
      data = await data.json();
      res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/element-summary/:id", async (req, res) => {
  try {
    let url =
      "https://fantasy.premierleague.com/api/element-summary/" +
      req.params.id +
      "/";
      let data = await fetch(url, {
        method: "GET",
        headers: {
          "user-agent": "Mozilla/4.0 MDN Example",
          "content-type": "application/json",
        },
      });
      data = await data.json();
      res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/history/:id", async (req, res) => {
  try {
    let url =
      "https://fantasy.premierleague.com/api/entry/" +
      req.params.id +
      "/history/";
      let data = await fetch(url, {
        method: "GET",
        headers: {
          "user-agent": "Mozilla/4.0 MDN Example",
          "content-type": "application/json",
        },
      });
      data = await data.json();
      res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/entry/:id", async (req, res) => {
  try {
    let url =
      "https://fantasy.premierleague.com/api/entry/" + req.params.id + "/";
      let data = await fetch(url, {
        method: "GET",
        headers: {
          "user-agent": "Mozilla/4.0 MDN Example",
          "content-type": "application/json",
        },
      });
      data = await data.json();
      res.send(data);
  } catch (err) {
    console.log(err);
  }
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("http is running on port 3000"));
