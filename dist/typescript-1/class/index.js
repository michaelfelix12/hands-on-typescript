"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./object/car");
const car_type_1 = require("./object/car-type");
const sedan = new car_1.Car();
sedan.id = '1';
sedan.name = 'Civic';
sedan.brand = 'Honda';
sedan.type = car_type_1.CarType.SEDAN;
sedan.engine = '1.5L';
console.log(sedan);
console.log(sedan);
