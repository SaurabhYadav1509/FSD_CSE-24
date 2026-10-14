const root = document.getElementById("container");
const btn = document.getElementById("btn");
const h2 = document.createElement("h2");
const img = document.createElement("img");
const div= document.createElement("div");

function showData(){
    try{
h2.innerText="Hello Bachoo";
h2.style.color='blue';
h2.style.backgroundColor='yellow';
div.appendChild(h2);
img.src='photo-1773332585754-f1436987743b.avif';
img.setAttribute('height',200);
img.setAttribute('width',250);
div.appendChild(img);

div.style.backgroundColor='orange';
root.appendChild(div);

    }
    catch(e){
    console.log("Error is something like " + e);
    }
    finally{
root.appendChild(btn);
root.removeChild(btn);
    }
}

btn.addEventListener('click',showData);

root.appendChild(btn);
function remove(){
root.removeChild(btn);
}
