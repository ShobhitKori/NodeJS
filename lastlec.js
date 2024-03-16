const express = require('express');
const fs = require('fs');
let app = express();

app.use(express.json());

let cars = JSON.parse(fs.readFileSync('ExpressJS/cars.json'));

app.get('/', (req, res)=> {
    res.status(200).json({
        message: 'Welcome to the Car API',
        cars: cars
    });
});

app.post('/', (req, res)=> {
    // console.log(cars.length);
    let newID;
    if(cars.length == 0) {
        newID = 1;
    } else {
        newID = cars[cars.length - 1].id + 1;
    }
    const newCar = Object.assign({id : newID}, req.body);
    cars.push(newCar);
    fs.writeFileSync("./ExpressJS/cars.json", JSON.stringify(cars), (err) => {
        res.status(200).json({
            cars: cars
        });
    });
});

app.patch('/:id', (req, res)=> {
    let id = req.params.id * 1;
    let carToUpdate = cars.find(eL => eL.id == id);
    if(!carToUpdate) {
        res.status(404).json({
            status: 'Fail',
            message: 'Movie with id ' + id + ' not found.'
        });
    }
    let index = cars.indexOf(carToUpdate);
    Object.assign(carToUpdate, req.body);
    cars[index] = carToUpdate;
    fs.writeFile('ExpressJS/cars.json', JSON.stringify(cars), (err)=> {
        
        res.status(201).json({
            status: 'success',
            data: {
                cars : cars
            }
        })
    });
});

app.delete('/:id', (req, res)=> {
    const id = req.params.id * 1;
    const carToDelete = cars.find(eL => eL.id == id);
    const index = cars.indexOf(carToDelete);
    if(!carToDelete) {
        res.status(404).json({
            status: 'Fail',
            message: 'Movie with id ' + id + ' not found to delete.'
        });
    }
    cars.splice(index, 1);

    fs.writeFile('ExpressJS/cars.json', JSON.stringify(cars), (err)=> {
        res.status(204).json({
            cars: cars
        });
    });
});

app.listen(3000, ()=> {
    console.log('server is started');
});