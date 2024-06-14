import express from "express";
import {
    listTechnologies,
    getDate,
    addTechnologie,
} from "../controllers/technologies.controllers.js";

const router = express.Router();

router.get("/", listTechnologies);
router.get("/now", getDate);
router.post("/", addTechnologie);

export default router;