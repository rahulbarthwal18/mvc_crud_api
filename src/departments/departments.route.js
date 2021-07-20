//its  a view which connect with the controller
const express = require('express');
const router = express.Router();
const controller = require('../departments/departments.controller.js');

router.get('/',(req, res) => {
    let message = "<center><h1>Department page</h1>";
    res.send(message);
});
router.post('/insert', controller.insertData);
router.get('/select/:id?', controller.selectData);
router.delete('/delete/:id', controller.deleteData);
router.put('/update/:id', controller.updateData);

module.exports= router;