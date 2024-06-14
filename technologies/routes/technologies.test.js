import { expect } from 'chai';
import supertest from 'supertest';
import { describe, it } from 'mocha'; 
import app from '../../app.js'; 
import { addItem } from '../models/technologies.models.js';

const requestWithSupertest = supertest(app);

describe('GET "/technologies"', () => {
    it('should return all technologies', async () => {
        const res = await requestWithSupertest.get('/technologies');
        expect(res.status).to.equal(200);
        expect(res.type).to.include('json');
        expect(res.body).to.deep.equal([
            {
                id: 1,
                name: "Swagger",
            },
        ]);
    });
});
describe('POST "/technologies"', () => {
    it('should add a new technology and return it', (done) => {
        requestWithSupertest
            .post('/technologies')
            .set('nickname', 'testUser') // Establece el encabezado 'nickname'
            .send({
                name: 'swagger', // Puedes enviar más propiedades si es necesario
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.deep.equal({
                    id: 2, // Ajusta el valor del ID según lo que esperas recibir
                    name: 'swagger',
                });
                done();
            });
    });

    it('should return 400 if nickname header is missing', (done) => {
        requestWithSupertest
            .post('/technologies')
            .send({
                name: 'swagger', // Envía solo el nombre u otras propiedades necesarias
            })
            .expect(400)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.deep.equal({
                    error: 'Nickname is required',
                });
                done();
            });
    });

    // Puedes agregar más casos de prueba según sea necesario
});