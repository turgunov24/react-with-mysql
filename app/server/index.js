// imports
import express from "express";
import con from "../db.js";
import usersRoute from "../routes/users.js";

// defines
const PORT = 5173;
const app = express();
import cors from "cors";

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//
// app.get("/users/index", (req, res) => {
//   console.log("res");
//   con.query("SELECT * FROM test", (error, data) => {
//     if (error) {
//       res
//         .status(500)
//         .json({ error: "Error retrieving data from the database" });
//     } else {
//       res.setHeader("Content-Type", "application/json");
//       res.send(data);
//     }
//   });
// });

// app.get("/use", (req, res) => {
//   res.json({
//     type: "success",
//   });
// });

app.use("/users", usersRoute);

app.get("*", (req, res) => {
  res.send("not foundd");
});

// listen
app.listen(PORT, () =>
  con.connect((error) => {
    if (error) console.log("something went wrong!");
    else console.log("successfully connected!");
  })
);
