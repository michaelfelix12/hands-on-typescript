export default class Cafe {
    orderCoffee(order: string, callback: (error?: any, result?: string) => void): void {
        console.log(`Mohon menunggu, pesanan ${order} sedang diproses`)
        setTimeout(() => {
            if (order === 'teh') {
                callback(`Maaf, kami tidak melayani pesanan ${order}`)
            } else {
                callback(null, `Pesanan ${order} sudah siap`)
            }
        }, 3000)
    }

    callbackPromise(order: string, resolve: any, reject: any): void {
        this.orderCoffee(order, (error?: any, result?: string) => {
            if(error) {
                reject(new Error)
            } else {
                resolve(result)
            }
        })
    }

    orderCoffeeWithAsync(order: string): Promise<string>{
        return new Promise((resolve, reject) => {
            this.callbackPromise(order, resolve, reject)
        })
    }
}