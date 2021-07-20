const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const express = require('express');
const app = express();


const port = process.env.PORT || 3000;
const employeeRoutes = require('./src/employees/employees.route.js');
const departmentRoutes = require('./src/departments/departments.route.js');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res) =>{
    let message = "Welcome to MVC CRUD API";
    res.send(message);

});
app.use('/api/employees',employeeRoutes);
app.use('/api/departments',departmentRoutes);
app.use((req,res) => {
    res.status(404).send("Page not found");
});


app.listen(port, () => {
    console.log(`Port no. ${port} is running`);
});