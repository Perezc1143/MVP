require('dotenv').config()
const express = require('express');
const app = express();
// const db = require('./db_config.js');
const { Pool } = require('pg')
app.use(express.json())
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

app.use(express.static('public'))


// app.get('/customer/:name',(req,res)=>{
//     const {name} = req.params;
//     pool.query('SELECT * FROM customer WHERE name=$1',[name],(err,data) => {
//         res.send(data.rows)
//     })
// })
app.get('/customer/:name', (req,res) => {
    const customer_name = req.params.name
    pool.query('SELECT * FROM customer JOIN vehicle ON vehicle.customer_id=customer.id WHERE name=$1;', [customer_name], (err,data) => {
        if(err){
            res.status(404).send(err)
          
        }else{
            res.send(data.rows);
        }
    })
});


// adding a new customer
app.post('/customer', (req,res) => {
    const {name, phone_number, address, new_customer} = req.body
    pool.query('INSERT INTO customer (name,phone_number,address,new_customer) VALUES ($1,$2,$3,$4);', [name,phone_number,address,new_customer], (err,data) => {
       if(err){
           res.status(404).send(err);
       }else{
           console.log(req.body);
       }
    })
});

// updating a customer
app.put('/customer/:id', (req,res) => {
    const {id} = req.params;
    const {name,phone_number,address, new_customer} = req.body;
    pool.query('UPDATE customer SET name=$1, phone_number=$2, address=$3, new_customer=$4 WHERE id=$5;', [name,phone_number,address,new_customer,id], (err,data)=>{
        if(err) {
            res.status(404).send('Unable to update your customer');
            console.log(err)
        } else {
            res.send(req.body)
            }
        });
});

//delete a customer
app.delete('/customer/:id', (req,res) => {
    const {id} = req.params;
    pool.query('DELETE FROM customer WHERE id=$1', [id], (err,data) => {
        if(err){
            console.log(err)
            res.status(404).send(err);
        }else{
            res.send('DELETED');
        }
    })
})

//get for vehicle with id
app.get('/vehicle/:id', (req, res) => {
    const {id} = req.params;
    pool.query('SELECT * FROM vehicle WHERE id=$1;',[id], (err, data) => {
        res.send(data.rows);
    })
});

//adding a new vehicle
app.post('/vehicle', (req,res) => {
    const {make, model, year, mileage, under_warranty,customer_id} = req.body
    pool.query('INSERT INTO vehicle (make, model, year, mileage, under_warranty,customer_id) VALUES ($1,$2,$3,$4,$5,$6);', [make, model, year, mileage, under_warranty,customer_id], (err,data) => {
       if(err){
           console.log(err)
           res.status(404).send(err);
       }else{
           res.json(req.body);
       }
    })
});

//updating a vehicles mileage
app.put('/vehicle/:id', (req,res) => {
    const {id} = req.params;
    const {make, model, year, mileage, under_warranty,customer_id} = req.body;
    pool.query('UPDATE vehicle SET make=$1, model=$2, year=$3, mileage=$4, under_warranty=$5,customer_id=$6 WHERE id=$7;', [make, model, year, mileage, under_warranty,customer_id,id], (err,data)=>{
        if(err) {
            res.status(404).send('Unable to update your vehicle');
            console.log(err)
        } else {
            res.send(req.body)
            }
        });
});
  
//deleting a vehicle
app.delete('/vehicle/:id', (req,res) => {
    const {id} = req.params;
    pool.query('DELETE FROM vehicle WHERE id=$1;', [id], (err,data) => {
        if(err){
            console.log(err)
            res.status(404).send(err);
        }else{
            res.send('DELETED');
        }
    })
});

//listening
app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`);
})
module.exports = app;
    
    



