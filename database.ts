import { error } from "console";
import mongoose from "mongoose";
import config from "./config";

const uri = `mongodb+srv://${config.user}:${config.mongo_pass}@${config.mongo_host}/${config.dbName}?retryWrites=true&w=majority`;

// de esta forma se ejecuta inmediatamente la funcion sin necesidad de llamarla 
(
    async () => {
        try { 
            const db = await mongoose.connect(uri)
            console.log(`Connected to Database: ${db.Connection.name}!!`)
        }
        catch { (err: string) => { console.error(err) } }
    }
)()
