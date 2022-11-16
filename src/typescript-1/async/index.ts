import Cafe from './coffee/order-coffee'

// const cafe: Cafe = new Cafe() 
// const takeOrder = (error: any, coffee: string) => {
//     if(error) {
//         console.log(error)
//     } else {
//         console.log(coffee)
//     }
// }

// const order: string[] = ['kopi','teh','susu','latte']
// cafe.orderCoffee(order[0], takeOrder)

const cafe: Cafe = new Cafe()
const orders: string[] = ['kopi','teh','susu','latte']

// const takeOrder: Promise<string>[] = orders.map ((order) => {
//     return cafe.orderCoffeeWithAsync(order)
// })

// Promise.all(takeOrder)
//     .then((result: string[]) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

async function orderProcess(): Promise<string[]> {
    const result: string[] = []
    for (const order of orders) {
        try {
            const takeOrder: string = await cafe.orderCoffeeWithAsync(order)
            result.push(takeOrder)
        } catch (error) {
            console.log(`Pesanan ${order} gagal, karena ${error}`)
        }
    }
    return result
}

orderProcess()
.then((result: string[]) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})