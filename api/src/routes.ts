import { Router } from "express"
import { BracketsValidation } from "./controllers/BracketsController"
import { ContactController } from "./controllers/ContactController"
import { UserController } from "./controllers/UserController"

const router = Router()

const userController = new UserController()
const contactController = new ContactController()

// Brackets validation
router.get("/brackets", BracketsValidation)

// User
router.post("/user", userController.Create)
router.get("/user", userController.FindAll)
router.get("/user/:id", userController.FindById)
router.patch("/user/:id", userController.Update)
router.delete("/user/:id", userController.Delete)

//Contact
router.post("/contact", contactController.Create)
router.get("/contact/:userId", contactController.FindByUserId)
router.patch("/contact/:id", contactController.Update)
router.delete("/contact/:id", contactController.Delete)

export { router }