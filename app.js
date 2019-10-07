import express from "express";
import routes from "./routes";

const app = express();

app.get("/", routes.index);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
