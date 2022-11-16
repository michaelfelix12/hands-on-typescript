"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(car) {
        if (car) {
            this.id = car.id;
            this.name = car.name;
            this.brand = car.brand;
            this.type = car.type;
            this.engine = car.engine;
            this.isStarted = car.isStarted;
        }
    }
    startEngine() {
        this.isStarted = true;
    }
}
exports.Car = Car;
