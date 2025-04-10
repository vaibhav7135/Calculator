let string = "";
let buttons = document.querySelectorAll(".button");
let inp = document.querySelector("input");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
console.log(e.target);
if(e.target.innerText=="="){
    string = eval(string);
    inp.value=string;
}
else if(e.target.innerText=="AC"){
    string="";
    inp.value=string;
}
else if(e.target.innerText=="DEL"){
    string =string.slice(0,-1);
    inp.value=string;
}
else{
string=string+e.target.innerText;
        inp.value=string;
}
    })
})