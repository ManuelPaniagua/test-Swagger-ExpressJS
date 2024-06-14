import express from "express";
import {
    listTechnologies,
    getDate,
    addTechnologie,
} from "../controllers/technologies.controllers.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *     Technology:
 *      type: object
 *      properties:
 *          id:
 *              type: integer
 *              description: Technology id
 *          name:
 *              type: string
 *              description: Technology name
 *      example:
 *          id: 1
 *          name: Swagger
 */

/**
 * @swagger
 * /technologies:
 *  get:
 *     summary: Get all technologies
 *     description: Retrieve a list of all technologies
 *     responses:
 *      200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Technology'
 *      500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /technologies/now:
 *  get:
 *     summary: Get current date and/or time
 *     description: Retrieve the current date and/or time based on the provided format
 *     parameters:
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [time, date, full]
 *         description: The format of the response
 *     responses:
 *      200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 time:
 *                   type: string
 *                   description: The current time (if format is 'time')
 *                 date:
 *                   type: string
 *                   description: The current date (if format is 'date')
 *                 datetime:
 *                   type: string
 *                   description: The full date and time (if format is 'full' or any other value)
 *      500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /technologies:
 *  post:
 *     summary: Add a new technology
 *     description: Add a new technology to the list
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Technology'
 *     responses:
 *      200:
 *         description: Technology added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Technology'
 *      400:
 *         description: Nickname is required
 *      500:
 *         description: Internal Server Error
 */

router.get("/", listTechnologies);

router.get("/now", getDate);

router.post("/", addTechnologie);

export default router;