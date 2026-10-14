
// console.log("hello fsd")

// function sum(a,b){
//     return a+b;
// };


// const result = sum(10, 20);
// console.log(result);


// function sqroot(a){
//     return sqrt(a);
// }

// const ans = sqroot(16);
// console.log(ans);

// const sum1 = (a,b)=>{return a+b};

const sum1 = (a, b) => {
    return a + b;
};

console.log(sum1(10, 20));

// var a = 22;
// console.log(typeof(a));
// if (a > 20){
//     var a = 40;
//     console.log("inside the block "+a);
// }
// console.log("outside the block "+a);

// let a = 22;
// if (a > 20){
//     let a = 40;
//     console.log("inside the block "+a);
// }
// console.log("outside the block "+a);

function sum(a,b){
    return a+b;
}

function msgcall(clbk,msg){
    const result = clbk(4,5);
    console.log("hi "+msg+"result is "+result);
}
msgcall(sum,"Rahul ");

function login(error,msg){
    if (error){
        console.log("this is a error "+error);
    }
    else{
        console.log(msg);
    }
}

// function loginHandler(username,password,clbk){
//     if (username=="saurabh" && password=="12345"){
//         clbk(null,"login sucess");
//     } else{
//             clbk("username or password incorrect ",null);
//         }
//     }
// loginHandler("saurabh","12345",login);

// async code example:-
// console.log("one");
// setTimeout(()=>{console.log("two"),1000})
// console.log("three");



// console.log("one");
// for(i=0;i<1000;i++){
//     console.log("i="+i);
// }
// console.log("three");

const container = document.getElementById("container");
const button = document.getElementById("btn");
const img = document.createElement("img");
const loader = document.createElement("h2");

const h1 = document.createElement('h1')
console.log(h1)
h1.innerText='ABES Engineering College'

console.log(container);
console.log(button);

function ping(){
    try{
    // alert("server ping");
    loader.innerHTML='<h2>Loading Data...</h2>'
    container.innerHTML='<h2>Welcome to DOM</h2>'
    h1.style.backgroundColor='cyan';
    h1.style.color='red';
    container.appendChild(loader);
    container.appendChild(h1);

    img.src='microsoft-copilot-pqMPnPo4_ZA-unsplash.jpg';
    img.setAttribute('height',200);
    img.setAttribute('width',200);
    container.appendChild(img);
    }
    catch(e){
loader.innerHTML='<h2 style=color:red>Error in loading data</h2>'
    }

}

button.addEventListener('click', ping);