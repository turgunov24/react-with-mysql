// imports
import express from "express";
import con from "../db.js";

// defines
const router = express.Router();

// index-get
router.get("/index", (req, res) => {
  con.query("SELECT * FROM test", (err, data) => {
    if (err) throw new Error("db error");
    else {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    }
  });
});

// create-post
router.post("/create", (req, res) => {
  const body = req.body;
  con.query(
    `INSERT INTO test (firstName, lastName, email, id, password, username) VALUES ('${body.firstName}','${body.lastName}','${body.email}','${body.id}','${body.password}','${body.username}')`,
    (err, data) => {
      if (err) throw new Error("db error");
      else {
        res
          .setHeader("Content-Type", "application/json")
          .status(200)
          .json("successfully created!");
      }
    }
  );
});

// update-get
router.get("/update/:id", (req, res) => {
  con.query(`SELECT * FROM test WHERE id=${req.params.id}`, (err, data) => {
    if (err) throw new Error("db error");
    else {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    }
  });
});

// update-put
router.put("/update/:id", (req, res) => {
  const body = req.body;

  con.query(
    `UPDATE test SET firstName='${body.firstName}',lastName='${body.lastName}',email='${body.email}',password='${body.password}',username='${body.username}' WHERE id=${req.params.id}`,
    (err, data) => {
      if (err) throw new Error("db error");
      else {
        res
          .setHeader("Content-Type", "application/json")
          .status(200)
          .json("successfully updated!");
      }
    }
  );
});

// delete
router.delete("/delete/:id", (req, res) => {
  con.query(`DELETE FROM test WHERE id=${req.params.id}`, (err, data) => {
    if (err) throw new Error("db error");
    else {
      res
        .setHeader("Content-Type", "application/json")
        .status(200)
        .json("successfully deleted!");
    }
  });
});

// view-get
router.get("/view/:id", (req, res) => {
  con.query(`SELECT * FROM test WHERE id=${req.params.id}`, (err, data) => {
    if (err) throw new Error("db error");
    else {
      res.setHeader("Content-Type", "application/json").status(200).json(data);
    }
  });
});

// exports
export default router;
