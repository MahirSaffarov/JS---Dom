let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector(".list ul");


button.addEventListener("click",function(){
    let inputValue = input.value;

    if(!!!inputValue){
        alert("Input can not empty")
        return;
    }
    let list = document.querySelectorAll(".list li")
    for (const item of list) {
        if(item.innerText == inputValue){
            alert("Item already exist")
            input.value = "";
            return;
        }
    }
    let li = document.createElement("li");
    let xsign = document.createElement("span");
    li.className =  "list-group-item my-1";
    xsign.className = "x-sign"
    li.innerText = inputValue;
    xsign.innerText = "X"
    ul.append(li);
    li.append(xsign)
    input.value = "";
    event.preventDefault();
    
    xsign.addEventListener("click", function(){
        li.remove();
    })
})