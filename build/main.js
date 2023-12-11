"use strict";
// MacOS: cmd + shift + B
// Win: ctrl + shift + B
console.log("Welcome");
// Types
// String / Number / Boolean
let a;
a = "Hello cybersoft";
let b;
b = 1;
// b = "Hehe";
let c;
c = false;
c = true;
// c = 2;
// Array:
// let d: Array<string>;
let arr1;
arr1 = ["a", "b", "c"];
let arr2;
arr2 = [1, 2, 3, 4];
// Tuple
let arr3;
arr3 = ["a", 2];
// Enum
var CURRENCY;
(function (CURRENCY) {
    CURRENCY[CURRENCY["VND"] = 0] = "VND";
    CURRENCY[CURRENCY["USD"] = 1] = "USD";
})(CURRENCY || (CURRENCY = {}));
CURRENCY.VND; // "Việt Nam Đồng"
CURRENCY.VND; // 0
CURRENCY.USD; // 1
console.log("CURRENCY.VND", CURRENCY.VND); //"CURRENCY.VND": 0
console.log("CURRENCY.USD", CURRENCY.USD); //"CURRENCY.USD":  1
var Languages;
(function (Languages) {
    Languages["Ti\u1EBFng Vi\u1EC7t"] = "VN";
    Languages["Ti\u1EBFng Anh"] = "EN";
})(Languages || (Languages = {}));
Languages["Tiếng Anh"];
Languages["Tiếng Việt"];
let student = {
    fullName: "Nguyễn Văn A",
    age: 18,
    address: "Hồ Chí Minh",
    className: "BC53",
};
// Types nâng cao
// Union Types
let data = null;
data = {
    fullName: "Nguyễn Văn B",
    address: "HCM",
    age: 18,
    className: "BC52",
};
// Pick
let data1;
// Omit
let updateStudent;
// Partial
let paramsUrl;
// Record
let obj1;
obj1 = {
    a: 1,
    b: "2",
};
// Function
const getCount = () => {
    return false;
};
const showMessage = () => {
    console.log("hello");
};
const doSomethingString = () => {
    return 1;
};
// ReturnType
let doSth;
let interval = setInterval(() => {
    console.log("Hello cybersoft");
}, 2000);
let timeout = setTimeout(() => {
    console.log("Hello cybersoft");
}, 2000);
// Generic types
const getData = (data) => {
    return data;
};
let productData = getData({ name: "IP", type: "IP" });
let studentData = getData({
    fullName: "Nguyen Van A",
    className: "BC53",
});
const dataMovie = {
    status: 200,
    data: [{ tenPhim: "Phim 1", moTa: "Mo ta 1", danhGia: 1 }],
};
const dataMovieError = {
    message: "Lỗi ",
    error: {
        code: 400,
        message: "Không tìn thấy dữ liệu",
    },
};
// Classes
class Car {
    constructor(color, type, price) {
        this.color = color;
        this.type = type;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
const car1 = new Car("green", "toyota", 200000);
console.log(car1.getPrice());
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employees extends Person {
    constructor(empCode, name) {
        super(name);
        this.empCode = empCode;
    }
    getInfo() {
        console.log(this.name);
    }
}
const employees1 = new Employees(123, "Alice");
