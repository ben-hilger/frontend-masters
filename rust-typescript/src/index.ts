const list = [1, 2, 3].map(val => val + 1);
console.log(list);

import fs from "fs"

console.log("Reading files...");

fs.readFileSync("lines.txt")
    .toString()
    .split("\n")
    .forEach(line => console.log(line));

fs.readFileSync("lines.txt")
    .toString()
    .split("\n")
    .filter((_, index) => index % 2 === 0)
    .forEach(line => console.log(line));

fs.readFileSync("lines.txt")
    .toString()
    .split("\n")
    .filter((_, index) => index % 2 === 0)
    .filter((_, i) => i >  1 && i < 4)
    .forEach(line => console.log(line));

enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
    Yellow = "yellow"
}

console.log("Printing color enum...");

function printColor(color: Color) {
    console.log(color);
}

printColor(Color.Blue);
printColor(Color.Green);
printColor(Color.Red);
printColor(Color.Yellow);

type Custom = {
    age: number,
    name: string,
}

type Item = number | string | Custom;

function append(items: Item[]) {
    items.push("hello fem!");
}

const items: Item[] = [];

console.log(items);
append(items);
console.log(items);

const numbers: number[] = [];
console.log(numbers);
append(numbers);
console.log(numbers);

function practice(nums: number[], index: number): number {
    return (nums[index] ?? index) * 5;
}

console.log("---default/coalesce practice---");
console.log(practice([2, 3, 4], 1));

function errorHandling() {
    const fileName = process.argv[2];
    if (!fileName) return;

    console.log("---Error handling---")
    fs.readFileSync(fileName)
        .toString()
        .split("\n")
        .forEach(line => {
            const print = parseInt(line);
            if (isNaN(print)) {
                console.log('Not a number');
            } else {
                console.log(print);
            }
        })
}

if (process.argv.length >= 3) {
    errorHandling();
}


interface Area {
    area(): number;
}
class Rectangle implements Area {
    constructor(
        public x: number,
        public y: number,
        public width: number,
        public height: number
    ) {}

    area(): number {
        return this.width * this.height;
    }

    toString() {
        return `Rectangle(${this.x},${this.y}): ${this.width}x${this.height}`;
    }
}

class Circle implements Area {
    constructor(
        public x: number,
        public y: number,
        public radius: number
    ) {}

    area(): number {
        return this.radius * this.radius * Math.PI;
    }
}

