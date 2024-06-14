import express from 'express';
import cors from 'cors';
import technologiesRoutes from './technologies/routes/technologies.routes.js'

const app   = express()
const port = 3001

/* Glocal middlewares */
app.use(cors())
app.use(express.json())

/* Routes */
app.use('/technologies', technologiesRoutes)

/* Server setup */
if(process.env.NODE_ENV !== "test") {
    app.listen(port, () => console.log(`[Server]: Server is running at http://localhost:${port}`))
}

export default app;