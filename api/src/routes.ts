import { Router } from "express"
import { BracketsValidation } from "./controllers/BracketsController"

const router = Router()

// Brackets validation
router.get("/brackets", BracketsValidation)

export { router }