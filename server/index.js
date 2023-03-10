import express  from "express";
import cors from "cors";
import {dirname, join} from "path";
import { fileURLToPath } from "url";
import {PORT} from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";


const app = express();
const _dirName = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());


app.use(indexRoutes);
app.use(tasksRoutes);

app.use(express.static(join(_dirName, "../client/dist")));

app.listen(PORT);
console.log(`Server is running on PORT ${PORT}`);