const express = require("express");
const app = express();
const formate = require("date-format");

const PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  // res.send(process.env);
  let obj = {
    message: "Hello, World",
    process: process.env,
  };
  res.status(201).send(obj);
});

app.get("/v1/instagram", (req, res) => {
  // const instaSocial1 = {
  //   username: "___akashyadav___",
  //   followers: 101,
  //   following: 115,
  //   date: Date.now,
  // };
  // const instaSocial2 = {
  //   username: "ay_muski",
  //   followers: 31,
  //   following: 3,
  //   date: Date.now,
  // };
  const instaSocal = [
    {
      username: "___akashyadav___",
      following: 115,
      followers: 101,
      date: formate.asString("dd MM - hh:mm:ss", new Date()),
    },
    {
      username: "ay_muski",
      followers: 31,
      date: formate.asString("dd MM - hh:mm:ss", new Date()),
    },
  ];
  res.status(200).json({ instaSocal });
});

app.get("/v1/facebook/", (req, res) => {
  const facebookSocial = [
    {
      username: "fac_akashyadav_6789",
      frinds: 304,
      DOB: "03-11-2000",
      date: formate.asString("dd MM - hh:mm:ss", new Date()),
    },
    {
      username: "fac_himanshu_6789",
      frinds: 34,
      DOB: "08-06-1999",
      date: formate.asString("dd MM - hh:mm:ss", new Date()),
    },
  ];
  res.status(200).json({ facebookSocial });
});

app.get("/v1/linkedin/", (req, res) => {
  const linkedSocial = [
    {
      username: "akash503yadav",
      connections: 2302,
      pending: 450,
      postes: 67,
      date: Date.now,
    },
    {
      username: "himanshu1999",
      connections: 202,
      pending: 45,
      postes: 6,
      date: Date.now,
    },
  ];
  res.status(200).json({ linkedSocial });
});

app.get("/v1/:token/", (req, res) => {
  console.log(req.params.token);
  res.status(200).send({ params: req.params.token });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.get("/v1/:token/:name", (req, res) => {
  console.log(req.params.token);
  res
    .status(200)
    .send({ params: [{ Token: req.params.token }, { name: req.params.name }] });
});

// import { v4 as uuid } from "uuid";

// const myid = uuid();
// console.log("Genrated is: ", myid);
