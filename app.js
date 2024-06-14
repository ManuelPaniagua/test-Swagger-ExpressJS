import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJSdoc from 'swagger-jsdoc';


import technologiesRoutes from './technologies/routes/technologies.routes.js'

const app   = express()
const port = 3001

// swagger definition
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Technology API',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost:${port}`,
            }
        ]
    },
    apis: ['./technologies/routes/*.js'],
}

/* Global middlewares */
app.use(cors())
app.use(express.json())
app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerJSdoc(swaggerSpec))
)
// app.use(express.json())

/* Routes */
app.use('/technologies', technologiesRoutes)

/* Server setup */
if(process.env.NODE_ENV !== "test") {
    app.listen(port, () => console.log(`[Server]: Server is running at http://localhost:${port}`))
}

export default app;