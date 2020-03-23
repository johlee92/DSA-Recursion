// exercise number 1 - counting sheep
function countingSheep(count) {
    //base case
    if(count === 1) {
        return `${count}: Another sheep jumps over the fence` 
    }
    //recursive case
    return `${count}: Another sheep jumps over the fence` + `\n${countingSheep(count-1)}` 
}
countingSheep(3)

// exercise number 2 - power calculator
function powerCalculator(int, exp) {
    if(exp < 0) {
        return `exponent should be >= 0`
    }
    //base case
    if(exp === 0) {
        return 1
    }
    //recursive case
    return int * powerCalculator(int,exp-1)
}
powerCalculator(10,2)

// exercise number 3 - reversing a string
function reverseString(str) {
    //base case
    if(str.length === 0) {
        return str
    }
    //recursive case
    return reverseString(str.substring(1)) + str.charAt(0)
}
reverseString('hello');

// exercise number 4 - nth triangular number
function nthTriangularNumber(num) {
    //base case
    if(num === 1) {
        return num;
    }
    //recursive case
    return num + nthTriangularNumber(num - 1);
}
nthTriangularNumber(7);

// exercise number 5 - string splitter
// find out if there's a way to not have the variable declared outside of the recursive function
function stringSplitter(str, splitter) {
    //base case
    if(typeof newArr === 'undefined') {
        let newArr = [];
    }
    if(str.indexOf(splitter) === -1) {
        newArr.push(str)
        return newArr
    }
    //recursive case
    newArr.push(str.slice(0,str.indexOf(splitter)))
    stringSplitter(str.slice(str.indexOf(splitter)+1,str.length),splitter)
    return newArr
    // return str.slice(0,str.indexOf(splitter)) + ' '  stringSplitter(str.slice(str.indexOf(splitter)+1,str.length),splitter)
}
stringSplitter(`hello/world/this/is/fun`,`/`)

// exercise number 6 - Fibonacci
function fibonacciCalc(num) {
    //base case
    if(num === 1 || num === 2) {
        return 1
    }
    //condition to stop
    if(num < 1) {
        return 0
    }
    //recursive case
    let sumNum = fibonacciCalc(num-2) + fibonacciCalc(num-1)
    return sumNum
}
fibonacciCalc(3)

// exercise number 7 - Factorial
function factorialNum(num) {
    if(num === 1) {
        return 1
    }
    return num * factorialNum(num-1)
}
factorialNum(5)

// mazes for exercise 8 and 9
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// exercise 8
function mazePathFinder(maze,ew=1,ns=1) {
    //base case
    if(maze[ew][ns] === 'e') {
        return ''
    }
    // add a history to check backwards, maybe an array that stores prior locations
}

// exercise 12 - binary representation
function binaryRep(num) {
    if(num === 0) {
        return ''
    }
    if(num/2 > 1) {
        return `1` + `${binaryRep(num-1)}`
    }
    return `${num / 2}` + `${binaryRep(num-1)}` 
}
binaryRep(3)
