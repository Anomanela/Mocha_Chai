const chai = require('chai');
const expect = require('chai').expect;
const { it } = require('mocha');
const api = require('../API_KUNC/API.js');


describe('Pengujian Delete User :', async () => {
    let idUser = '';

    before(async () => {
        let response = await api.createUser('');
        expect(response.status).to.equal(200);
        // assert.notEqual(response.status, 200, 'berhasil');
        console.log(response.body);
        const idUser = response.body.id;
    })
        it('Get userlist', async () => {
            response = await api.getUserList();
            expect(response.status).to.equal(200);
        });
             it('User Sucessfull deleted', async () => {
        const response = await api.deleteUser(idUser)
    });
       it('Sucessfull get', async () => {
        response = await api.getuserdetail(idUser);
        expect(response.status).to.not.equal(400);
        
    });
});
