import {Car} from './object/car'
import {CarType} from './object/car-type'
import { Vehicle } from './object/vehicle'

// const sedan: Car = new Car()
// sedan.id = '1'
// sedan.name = 'Civic'
// sedan.brand = 'Honda'
// sedan.type = CarType.SEDAN
// sedan.engine = '1.5L'

// sedan.fillFuel(100)
// sedan.startEngine()
// console.log(sedan)

const argTesla: Vehicle = {
    id: '1',
    name: 'TeslaX',
    brand: 'Tesla',
    type: CarType.HATCHBACK,
    engine: 'Electric',
    isStarted: false
}

const teslaX: Car = new Car(argTesla)
console.log(teslaX)
teslaX.fillFuel(100)
teslaX.startEngine()