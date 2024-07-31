let input=document.getElementById('inputBox');
let button=document.querySelectorAll('button');

// let del=document.querySelector('.del')
// del.addEventListener("click", () =>{
//     del.innerHTML="hii"
// });




// let btn=document.createElement("button")

// btn.addEventListener("click", () => {
//     console.log("box was clicked");
//     btn.innerText= "ab"
// });

let string=""// this empty string collect out data in input

let arr=Array.from(button);// Array.from it give arry of our button

arr.forEach(button => {
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '=' ){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0, string.length-1);
            input.value =string
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

let a=eval('1+1')
console.log(a)
console.log(typeof(a))
