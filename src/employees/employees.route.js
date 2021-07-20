//its  a view which connect with the controller
const express = require('express');
const router = express.Router();
const controller = require('../employees/employees.controller.js');

router.get('/',(req, res) => {
    let message = "<center><h1>Employee page</h1>";
    res.send(message);
});
router.post('/insert',upload.single('profileImage'),controller.insertData);
router.get('/select/:id?', controller.selectData);
router.delete('/delete/:id', controller.deleteData);
router.put('/update/:id', controller.updateData);

module.exports= router;