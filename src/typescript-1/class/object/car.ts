import { CarFeature, CarSpec } from './car-feature'
import {CarType} from './car-type'
import {Vehicle} from './vehicle'

export class Car implements CarFeature, CarSpec {
    fuel: number = 0
    constructor(private readonly car?: Vehicle) { //"?" berarti optional, yang artinya kita tidak harus memanggil 
                             //properti ini kedalam sebuah objek kosong yang kita buat

    }
    safety(feature: string[]): void {
        throw new Error('Method not implemented.')
    }
    speed(km: number): void {
        throw new Error('Method not implemented.')
    }
    engineType(): string {
        throw new Error('Method not implemented.')
    }
    engineSpec(): string {
        throw new Error('Method not implemented.')
    }
    fuelType(): string {
        throw new Error('Method not implemented.')
    }

    fillFuel(fuel: number) {
        this.fuel = fuel
    }

    startEngine(): void { //void artinya kosong, berarti dia tidak me-return sebuah nilai
        if (this.fuel > 0) {
            this.car.isStarted = true
            console.log('Mobil jalan ...')
        } else {
            console.log('Bensin habis, silakan isi dulu')
        }
    }

    stopEngine(): void {
        this.car.isStarted = false
    }
}