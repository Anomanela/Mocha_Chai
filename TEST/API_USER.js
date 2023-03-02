const expect = require('chai').expect;
const api = require('../API_KUNC/API.js');
const assert = require('chai').assert;



describe('Pengujian API otomasi 2023 - endpoint post', async () => {
    it ("Positif-Check id user yang baru dibuat sesuai dengan yang ada di userlist ", async () => {
         // lakukan create user
         let response = await api.createUser();
         expect(response.status).to.equal(200)
         console.log(response.body);
         const idUser = response.body.id;
 
         // check user list
         response = await api.getUserList();
         expect(response.status).to.equal(200);
 
         //Check apakah data yang sudah di buat ada pada user list
         const resultFilter = response.body.data.filter ((element) => {
             return element.id === idUser;
 
         });
         expect (resultFilter.length).to.equal(1)
        
    });

    it ("Positif-Check name user ", async () => {
        // check user list
         response = await api.getUserList();
         expect(response.status).to.equal(200);

         //Check apakah data yang sudah di buat ada pada user list
         const resultFilter = response.body.data.filter (function(data){
             return data.name === "Jhoney";
    

         });    
          expect (resultFilter.length).to.greaterThan(1)
   
    });

    it ("Positif-Check phone_number user  ", async () => {
        // check user list
        response = await api.getUserList();
        expect(response.status).to.equal(200);

        //Check apakah data yang sudah di buat ada pada user list
        const resultFilter = response.body.data.filter (function(data){
            return data.phone_number === "528";
        

        });
        expect (resultFilter.length).to.greaterThan(2)
       
   });

   it ("Positif-Check address user  ", async () => {
        // check user list
         response = await api.getUserList();
         expect(response.status).to.equal(200);

         //Check apakah data yang sudah di buat ada pada user list
         const resultFilter = response.body.data.filter (function(data){
             return data.address === "jalan salak";
    

         });    
          expect (resultFilter.length).to.greaterThan(1)
   
    });

    it ("Negatif-Create user bad gateway 400 ", async () => {
        // lakukan create user
        let response10 = await api.negatif();
        //expect(response10.status).to.equal(200);
        expect(response10.status).to.equal(200);
        
     });

     it ("Negatif-Create user bad gateway 400 ", async () => {
        // lakukan create user
        let response10 = await api.negatif();
        //expect(response10.status).to.equal(200);
        expect(response10.status).to.equal(400);
        
     });

     it ("Negatif-Check name user ", async () => {
        // check user list
         response = await api.getUserList();
         expect(response.status).to.equal(200);

         //Check apakah data yang sudah di buat ada pada user list
         const resultFilter = response.body.data.filter (function(data){
             return data.name === "EINSTEIN";
    

         });    
          expect (resultFilter.length).to.equal(1)
   
    });

    it ("Negatif -Check phone_number user  ", async () => {
        // check user list
        response = await api.getUserList();
        expect(response.status).to.equal(200);

        //Check apakah data yang sudah di buat ada pada user list
        const resultFilter = response.body.data.filter (function(data){
            return data.phone_number === "991";
        

        });
        expect (resultFilter.length).to.equal(1)
       
   });

   it ("Negatif-Check address user  ", async () => {
    // check user list
     response = await api.getUserList();
     expect(response.status).to.equal(200);

     //Check apakah data yang sudah di buat ada pada user list
     const resultFilter = response.body.data.filter (function(data){
         return data.address === "SNAKEFRUIT STREET2";


     });    
      expect (resultFilter.length).to.equal(1)

});

});