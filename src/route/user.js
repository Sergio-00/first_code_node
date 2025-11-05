import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
  res.send({
    message: "OK",
    status: 200,
    type: "get user",
  });
});

export default route;
