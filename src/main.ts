// MacOS: cmd + shift + B
// Win: ctrl + shift + B

console.log("Welcome");

// Types
// String / Number / Boolean

let a: string;
a = "Hello cybersoft";

let b: number;
b = 1;
// b = "Hehe";

let c: boolean;
c = false;
c = true;
// c = 2;

// Array:
// let d: Array<string>;
let arr1: string[];
arr1 = ["a", "b", "c"];

let arr2: number[];
arr2 = [1, 2, 3, 4];

// Tuple
let arr3: [string, number];
arr3 = ["a", 2];

// Enum
enum CURRENCY {
  "VND",
  "USD",
}
CURRENCY.VND; // "Việt Nam Đồng"
CURRENCY.VND; // 0
CURRENCY.USD; // 1
console.log("CURRENCY.VND", CURRENCY.VND); //"CURRENCY.VND": 0
console.log("CURRENCY.USD", CURRENCY.USD); //"CURRENCY.USD":  1

enum Languages {
  "Tiếng Việt" = "VN",
  "Tiếng Anh" = "EN",
}

Languages["Tiếng Anh"];
Languages["Tiếng Việt"];

// Object
type Student = {
  fullName: string;
  age: number;
  address: string;
  score?: number;
  phone?: number;
  className: string;
};

interface Student1 {
  fullName: string;
  age: number;
  address: string;
  score?: number;
  phone?: number;
  className: string;
}

let student: Student = {
  fullName: "Nguyễn Văn A",
  age: 18,
  address: "Hồ Chí Minh",
  className: "BC53",
};

// Types nâng cao

// Union Types
let data: Student | null = null;

data = {
  fullName: "Nguyễn Văn B",
  address: "HCM",
  age: 18,
  className: "BC52",
};

// Pick
let data1: Pick<Student, "fullName" | "age">;

// Omit
let updateStudent: Omit<Student, "fullName" | "score" | "age">;

// Partial
let paramsUrl: Partial<Student>;

// Record
let obj1: Record<string, string | number>;
obj1 = {
  a: 1,
  b: "2",
};

// Function
const getCount = (): boolean => {
  return false;
};

const showMessage = (): void => {
  console.log("hello");
};

const doSomethingString = () => {
  return 1;
};

// ReturnType
let doSth: ReturnType<typeof doSomethingString>;

let interval: ReturnType<typeof setInterval> = setInterval(() => {
  console.log("Hello cybersoft");
}, 2000);

let timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
  console.log("Hello cybersoft");
}, 2000);

// Generic types
const getData = <H>(data: H): H => {
  return data;
};

interface Product {
  name: string;
  type: string;
}

let productData = getData<Product>({ name: "IP", type: "IP" });

interface Student2 {
  fullName: string;
  className: string;
  age?: number;
}

let studentData = getData<Student2>({
  fullName: "Nguyen Van A",
  className: "BC53",
});

interface ResponseSuccessApi<T> {
  status: number;
  data: T;
}

interface DataMovie {
  tenPhim: string;
  moTa: string;
  danhGia: number;
}

const dataMovie: ResponseSuccessApi<DataMovie[]> = {
  status: 200,
  data: [{ tenPhim: "Phim 1", moTa: "Mo ta 1", danhGia: 1 }],
};

interface ResponseErrorApi<E> {
  message: string;
  error: E;
}

const dataMovieError: ResponseErrorApi<{ code: number; message: string }> = {
  message: "Lỗi ",
  error: {
    code: 400,
    message: "Không tìn thấy dữ liệu",
  },
};

// Classes

class Car {
  color: string;
  type: string;
  price: number;
  constructor(color: string, type: string, price: number) {
    this.color = color;
    this.type = type;
    this.price = price;
  }
  getPrice(): number {
    return this.price;
  }
}

const car1 = new Car("green", "toyota", 200000);
console.log(car1.getPrice());

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employees extends Person {
  empCode: number;
  constructor(empCode: number, name: string) {
    super(name);
    this.empCode = empCode;
  }
  getInfo() {
    console.log(this.name);
  }
}

const employees1 = new Employees(123, "Alice");
