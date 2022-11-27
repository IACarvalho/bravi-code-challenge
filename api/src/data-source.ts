import "reflect-metadata"
import { DataSource } from "typeorm"
import { Contact } from "./entity/Contact"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User, Contact],
    migrations: [],
    subscribers: [],
})
