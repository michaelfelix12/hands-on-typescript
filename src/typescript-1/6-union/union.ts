let userId: string | number = '123'
userId = 123

function getMahasiswa (margin: string | number) : string | number {
    return margin;
}

type Color = 'red' | 'green' | 'blue';

function giveColor(color: Color | string): string {
    return color
}

function getNarrowAge(input: number | string) {
    if (typeof input === 'number') {
        return `you are inputted a number`
    } 
    `you are inputted a string`
}
console.log(getNarrowAge(123))