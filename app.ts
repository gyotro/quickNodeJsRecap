import express from "express";
import vid_routes from "./routes/videos.routes";
import morgan from "morgan";
import cors from "cors";
import config from "./config";

const router = vid_routes

const app = express()

app.use(cors())
// para que entienda incoming json requests
app.use(express.json())
// logging incoming request with morgan
app.use(morgan('dev'))
app.use(vid_routes)
// para que entienda formularios URL Encoded
app.use(express.urlencoded({extended : false}))
app.set('port', config.port)

export default app 