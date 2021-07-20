// it is the middle person between model ( data) and the route (view)
const { employeeSchema } = require('../../validation_schema.js');
const model = require('../employees/employees.services.js');

module.exports = {

    insertData: async (req, res, next) => {
        let {first_name,last_name,email,password,sallary,dept} =req.body;
        
        let resvalidate =  await employeeSchema.validateAsync(req.body);
        if(resvalidate.error){
            res.status(404).json(resvalidate.error.details[0].message);
        }else{
            let result= await model.insert(req.body);
            res.status(200).json(result);
        }
    },
    selectData: async (req, res, next) => {
        let id = req.params.id;
        let result= await model.select(id);
        res.status(200).json(result);
        
    },
    deleteData: async (req, res, next) => {
        let id = req.params.id;
        let result= await model.delete(id);
        res.status(200).json(result);
        
    },
    updateData: async (req, res, next) => {
        let {first_name,last_name,email,password,sallary,dept} =req.body;
        let id = req.params.id;
    
        let resvalidate = await employeeSchema.validateAsync(req.body);
        if(resvalidate.error){
            res.status(404).json(resvalidate.error.details[0].message);
        }else{
            let result= await model.update(req.body,id);
            res.status(200).json(result);
        }
        
    },
    
}