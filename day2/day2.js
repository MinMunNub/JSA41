

// document.getElementById("convertButton").addEventListener("click", function () {

//     const inputText = document.getElementById("inputText").value;

//     const upperText = inputText.toUpperCase();

//     document.getElementById("resultText").textContent = upperText;

//     localStorage.setItem("uppercaseResult", upperText);
// });

// let a = "hello"
// let chuHoa = a.toUpperCase()

// console.log(chuHoa);
// let inputText = document.getElementById("inputText")
// let convertButton = document.getElementById("convertButton")
// let resultText = document.getElementById("resultText")
// let emptyString = []

// convertButton.addEventListener("click", function() {
//     console.log(inputText.value.toUpperCase());
//     // resultText.innerText = inputText.value.toUpperCase()
//     let div = document.createElement("div")
//     div.innerText = inputText.value.toUpperCase()
//     resultText.appendChild(div)
//     emptyString.push(inputText.value.toUpperCase())
//     inputText.value = ""

//     localStorage.setItem("convertedTexts", JSON.stringify([...emptyString, inputText.value.toUpperCase()]))

//     document.addEventListener("DOMContentLoaded", () =>
//         (JSON.parse(localStorage.getItem("todoList")) || [])
//         .forEach(item => resultText.appendChild(Object.assign(document.createElement("div"), { innerText: item })))
//     );


// })

// let a = "hello"
// let chuHoa = a.toUpperCase()

// console.log(chuHoa);
let inputText = document.getElementById("inputText")
let convertButton = document.getElementById("convertButton")
let resultText = document.getElementById("resultText")
let emptyString = [];

convertButton.addEventListener("click", function () {
    const upperText = inputText.value.toUpperCase();
    if (upperText.trim() === "") return;

    const div = document.createElement("div");
    div.innerText = upperText;
    resultText.appendChild(div);

    emptyString.push(upperText);

    let textFromLocalStorage = JSON.parse(localStorage.getItem("listText")) || [];
    textFromLocalStorage.push(upperText);
    localStorage.setItem("listText", JSON.stringify(textFromLocalStorage));

    inputText.value = "";   
});

// ["ASDASD", "DFVDFV", "ADASDASD"]

// Lưu vào localStorage
// localStorage.setItem("key", "value")
// key và value dữ liệu phải là string
localStorage.setItem("name", "Phuong")
localStorage.setItem("age", "100")
let array = [1, 2, 3]
console.log(array); // array
// array = JSON.stringify(array)
// console.log(array[0]); // string
// let value = "Phuong"
// console.log(value[0]);
// let a = 10
// a = a + 100
// key = "arrayNumber"
// JSON.stringify(value): Chuyển 'value' từ dạng object/array -> string object/string array
localStorage.setItem("arrayNumber", JSON.stringify(array))

// Lấy dữ liệu từ localStorage: localStorage.getItem("key")

let arrayNumber = JSON.parse(localStorage.getItem("arrayNumber"))
console.log(arrayNumber);
// JSON.parse(value): Biến dữ liệu object/array từ dạng string -> dạng object/array dạng bình thường

console.log(arrayNumber);





