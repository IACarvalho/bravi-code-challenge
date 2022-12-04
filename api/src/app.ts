import "reflect-metadata"
import express from "express"
import { router } from "./routes"
import { AppDataSource } from "./data-source"
import cors from "cors"

const app = express()

app.use(cors())

app.use(express.json())

app.use( router )

AppDataSource.initialize().catch(error => console.log(error))

export { app }