import express  from "express";
import cors from "cors";
import {dirname, join} from "path";
import { fileURLToPath } from "url";
import {PORT} from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

import { expressCspHeader, INLINE, NONE, SELF } from 'express-csp-header';

const app = express();
const _dirName = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());


app.use(expressCspHeader({
    directives: {
        'default-src': [SELF],
        'script-src': [SELF, INLINE, 'somehost.com'],
        'style-src': [SELF, 'mystyles.net'],
        'img-src': ['data:', 'images.com'],
        'worker-src': [NONE],
        'block-all-mixed-content': true
    }
}));

app.use(indexRoutes);
app.use(tasksRoutes);

app.use(express.static(join(_dirName, "../client/dist")));

app.listen(PORT);
console.log(`Server is running on PORT ${PORT}`);