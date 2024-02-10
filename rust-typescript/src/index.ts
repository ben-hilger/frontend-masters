const list = [1, 2, 3].map(val => val + 1);
console.log(list);

import fs from "fs"

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

console.log(practice([2, 3, 4], 1));