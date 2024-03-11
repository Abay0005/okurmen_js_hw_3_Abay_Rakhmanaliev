

// let login = prompt("Логин жазыңыз:", "");


// if (login === "Абай") {

//     let password = prompt("Ведите пароль:", "255366");


//     if (password === "Катар") {
//         alert("мункунбу");
//     } else if (password === null) {
//         alert("Каталган");
//     } else {
//         alert("Ката!");
//     }
// } else if (login === null) {
//     alert("Каталган");
// } else {
//     alert("Кирүү чечилди");
// }
// let age = prompt("Жашыңызды киргизиниз:", "");

// if (age >= 18 && age <= 30) {
//     console.log("Ужас киного кирет");
// } else if (age >= 12 && age < 18) {
//     console.log("Фантастик киного кирет");
// } else if (age < 12) {
//     console.log("Мультикке кирет");
// } else {
//     console.log("Романтик киного кирет");
// }
function fillArrayWithOddNumbers() {
    let arr = [];
    for (let i = 1; i <= 100; i += 2) {
        arr.push(i);
    }
    return arr;
}

console.log(fillArrayWithOddNumbers());
let date = "2024-03-01";
let [year, month, day] = date.split("-");
let formattedDate = { year, month, day };

console.log(formattedDate);
let arr = [3, 2, 1];
let message = `${arr[0]} больше, чем ${arr[1]} больше, чем ${arr[2]}`;
console.log(message);
let arr = [3, 2, 1];А
let message = `${arr[0]} больше, чем ${arr[1]} больше, чем ${arr[2]}`;
console.log(message);
function printStars() {
    for (let i = 1; i <= 7; i++) {
        console.log("*".repeat(i));
    }
}

printStars();
let obj = {
    a: 11,
    b: 12,
    c: 13,
    d: 14,
    e: 15,
    f: 16,
    g: 17,
    h: 18,
};

let values = Object.values(obj);
let sum = values.reduce((acc, curr) => acc + curr, 0);
console.log("Сумма: ", sum);
let obj = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
};

let values = Object.values(obj);
console.log(values);
function checkStringLength(number, array) {
    array.forEach(item => {
        if (item.length < number) {
            console.log(`Бул текстин узундугу 5-тен аз: ${item}`);
        } else if (item.length > number) {
            console.log(`Бул текстин узундугу 5-тен коп: ${item}`);
        } else {
            console.log(`Бул текстин узундугу 5 менен тен: ${item}`);
        }
    });
}

let stringsArray = ["Apple", "Banana", "Cherry", "Grapes", "Pineapple"];
checkStringLength(5, stringsArray);

