const httpLib = require("supertest");
const apKuncie = httpLib ("https://api.kunciebootcampqa.com/api/bootcamp");

function createUser(){
    return apKuncie
            .post('/users')
            .send({
                "name": "HANNA",
                "phone_number": "528",
                "address": "jalan salak",
                "point": 500,
                "is_registered": true,
                "vehicles": [
                    {
                        "name": "{{vehic1}}",
                        "type": "{{brand1}}"
                    },
                    {
                        "name": "{{vehic2}}",
                        "type": "{{brand2}}"
                    }
                ]
            });
}

function negatif(){
    return apKuncie
           .post('/users')
           .send({
            "name": "Hartono",
            "phone_number": "{{no_telepon}}",
            "address": "{{alamat}}",
            "point": 500,
            "name": "user",
            "is_registered": true,
            "vehicles": [
                {
                    "name": "{{vehic1}}",
                    "type": "{{brand1}}"
                },
                {
                    "name": "{{vehic2}}",
                    "type": "{{brand2}}"
                }
            ]
        });
}

function getUserList(){
    return apKuncie.get('/users');
}

function deleteUser(userId) {
    return apKuncie
        .delete('/users/' + userId);
};
function getuserdetail(userId) {
    return apKuncie
       .get('/detail/users?id=' + userId);
};

module.exports = {
    getUserList,
    createUser,
    negatif,
    deleteUser,
    getuserdetail
}