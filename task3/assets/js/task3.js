let n1 = document.querySelector(".num1")
let n2 = document.querySelector(".num2")
let add = document.querySelector(".add")
let minus = document.querySelector(".minus")
let multi = document.querySelector(".multi")
let division = document.querySelector(".division")
let result = document.querySelector(".result")

add.addEventListener("click", function () {
        let res = n1.value + n2.value;
        result.innerText = res;
})
minus.addEventListener("click", function () {
    let res = n1.value - n2.value;
    result.innerText = res;
})
multi.addEventListener("click", function () {
    let res = n1.value * n2.value;
    result.innerText = res;
})
division.addEventListener("click", function () {
    let res = n1.value / n2.value;
    result.innerText = res;
})