import express from "express";
import vid_routes from "./routes/videos.routes";
import morgan from "morgan";
import cors from "cors";

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
app.set('port', process.env.port || 3000)

export default app