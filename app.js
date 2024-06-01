console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i <= 100; i++) {
    if(i%2 !== 0){
        console.log(`This number is odd ${i}`)
    } else {
        continue;
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 0; i <= 100; i++) {
    if(i%3 === 0 && i%5 === 0) {
        console.log("FIZZBUZZ");
        console.log(i)
    } else if (i%5 === 0) {
        console.log("BUZZ")
        console.log(i)
    } else if (i%3 === 0) {
        console.log("FIZZ")
        console.log(i)
    }
}
// Exercise 3 Section
let r = 0
while (r <= 100) {
    if(r%3 === 0 && r%5 === 0) {
        console.log("FIZZBUZZ");
        console.log(r);
    } else if (r%5 === 0) {
        console.log("BUZZ");
        console.log(r);
    } else if (r%3 === 0) {
        console.log("FIZZ");
        console.log(r);
    }
    r++
}
let k = 0
do {
    if(k%3 === 0 && k%5 === 0) {
        console.log("FIZZBUZZ");
        console.log(k);
    } else if (k%5 === 0) {
        console.log("BUZZ");
        console.log(k);
    } else if (k%3 === 0) {
        console.log("FIZZ");
        console.log(k);
    }
    k++
} while (k <= 100)
// Exercise 4 Section
console.log("Exercise 4")
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log(value)
for (let l = 0; l <= n; l++) {
    if (l === value) {
        console.log("Found Value!")
        break;
    } else if (l === n && value !== n) {
        console.log("Did not find value")
    }
}
// Exercise 5 Section
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000
for (let i = start; i <= end; i++) {
    if(i%buzzDivisor === 0 && i%fizzDivisor === 0) {
        console.log("FIZZBUZZ");
        console.log(i)
    } else if (i%buzzDivisor === 0) {
        console.log("BUZZ")
        console.log(i)
    } else if (i%fizzDivisor === 0) {
        console.log("FIZZ")
        console.log(i)
    }
}