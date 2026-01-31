function checkEvenOdd(n) {
    if (n % 2 === 0) {
        console.log(`Số ${n} là số chẵn`);
    } else {
        console.log(`Số ${n} là số lẻ`)
    }
}

checkEvenOdd(5);

const numbers = [15, 2, 34, 8, 19];
let max = 0;

numbers.forEach(function (number) {
    if (number > max) {
        max = number;
    };
})

console.log(max);

const users = [
    { name: "An", age: 17 },
    { name: "Bình", age: 20 },
    { name: "Chi", age: 15 },
    { name: "Dũng", age: 25 }
];

const newusers = users.filter(function (user) {
    return user.age >= 18;
});

console.log(newusers);


const cart = [
    { name: "Iphone", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 100 }
];
let prices = 0;

cart.forEach(function (carts) {
    prices += carts.price;
})

console.log(prices);