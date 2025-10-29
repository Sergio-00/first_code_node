import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
  res.send({
    message: "Lista de todos los productos",
    status: 200,
    type: "get product",
  });
});

route.put("/", (req, res) => {
  res.send({
    message: "Enviar un producto",
    status: 200,
    type: "send product",
  });
});

route.delete("/", (req, res) => {
  res.send({
    message: "Eliminando un producto",
    status: 200,
    type: "delete product",
  });
});

route.patch("/", (req, res) => {
  res.send({
    message: "Update de un producto",
    status: 200,
    type: "update product",
  });
});

export default route;
