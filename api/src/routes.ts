import { Router } from "express"
import { BracketsValidation } from "./controllers/BracketsController"
import { UserController } from "./controllers/UserController"

const router = Router()

const userController = new UserController()

// Brackets validation
router.get("/brackets", BracketsValidation)

// User
router.post("/user", userController.Create)
router.get("/user/:id", userController.FindById)
router.patch("/user/:id", userController.Update)
router.delete("/user/:id", userController.Delete)

export { router }