import {CarType} from './car-type'

export type Vehicle = {
    id: string
    name: string
    brand: string
    type: CarType
    engine: string
    isStarted: boolean
}