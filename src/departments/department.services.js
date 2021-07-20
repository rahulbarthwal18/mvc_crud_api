//here will perform opertions with database
const con = require('../../dbconnection/dbconnection.js');


module.exports = {
    //insertData 
    insert : (insertDetails) => {
       try{

        return new Promise((resolve,reject) => {
            const sql = "insert into departments set ?";
            con.query(sql,insertDetails, (err, result) => {
                if(err) reject(err);
                resolve("Data inserted...");
            });
        });
       }catch(error){
        console.log(error);
       }
    },
     //select
    selectData : (id) => {
        if(id==undefined)
        {
            try{
 
                return new Promise((resolve,reject) => {
                    const sql = "select * from departments";
                    con.query(sql, (err, result) => {
                        if(err) reject(err);
                        resolve(result);
                    });
                });
               }catch(error){
                console.log(error);
               }
        }else{
                try{
 
                    return new Promise((resolve,reject) => {
                        const sql = `select * from departments where id = ${id}`;
                        con.query(sql, (err, result) => {
                            if(err) reject(err);
                            resolve(result);
                        });
                    });
                   }catch(error){
                    console.log(error);
                   }
            }
    },
      //delete
    delete : (id) => {
        try{
 
         return new Promise((resolve,reject) => {
             const sql = `delete from departments where id = ${id}`;
             con.query(sql, (err, result) => {
                 if(err) reject(err);
                 resolve(`Data deleted of id no ${id}`);
             });
         });
        }catch(error){
         console.log(error);
        }
     },
        //update
    update : (data,id) => {
        try{
        
         return new Promise((resolve,reject) => {
             const sql = `update departments set ? where id = ${id}`;
             con.query(sql,data, (err, result) => {
                 if(err) reject(err);
                 resolve(`Data updated of id no ${id}`);
             });
         });
        }catch(error){
         console.log(error);
        }
     },

}
