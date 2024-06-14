import { addItem, listItems } from '../models/technologies.models.js';



export const listTechnologies = (req, res) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const getDate = (req, res) => {
    const format = req.query.format || 'full';
    const now = new Date();

    let response = {};
    if (format === 'time') {
        response.time = now.toTimeString().split(' ')[0];
    } else if (format === 'date') {
        response.date = now.toISOString().split('T')[0];
    } else {
        response.datetime = now.toISOString();
    }
    res.json(response);
};

export const addTechnologie = (req, res) => {
    try {
        const { nickname } = req.headers;
        if (!nickname) {
            return res.status(400).json({ error: 'Nickname is required' });
        }
        const resp = addItem(req.body)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

