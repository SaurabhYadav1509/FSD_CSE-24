const container = document.getElementById('container');
const button = document.getElementById('btn');

const p = document.createElement('p')
p.innerText='CSE 3rd Year'

const h2 = document.createElement('h2')
h2.innerText = 'Skills'

const pe = document.createElement('p')
p.innerText = 'C++, Python, Java, HTML, CSS, JavaScript'

function resume(){
    container.innerHTML="<h1>Saurabh Yadav</h1>"
    container.appendChild(p);
    container.appendChild(h2);
    
}



button.addEventListener('click', resume);