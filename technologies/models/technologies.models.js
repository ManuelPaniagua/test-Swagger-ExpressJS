import db from '../../db/db.js';

export const listItems = () => {
    try {
        return db?.technologies
    } catch (err) {
        console.log('Error', err)
    }
}

export const addItem = (data) => {
    try {
        const newTechnologie = { id: db.technologies.length + 1, ...data };
        db.technologies.push(newTechnologie);
        return newTechnologie;
    } catch (err){
        console.log('Error', err);
    }
};