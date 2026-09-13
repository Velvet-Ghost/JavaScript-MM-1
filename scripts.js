console.log("JavaScript file connected...")

let str = ""
let num = prompt("Enter a number:")

if (num < 100) {
    str = `${num} is less than 100`
}
else if (num == 100) {
    str = `${num} is equal to 100`
}
else if (num > 100) {
    str = `${num} is greater than 100`
}
else {
    str = `${num} is not a number`
}

console.log(str)
document.getElementById("output").innerText = (str)