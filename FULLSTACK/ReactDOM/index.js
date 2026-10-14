const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2',{style:{color:'blue'}},'welcome to React App Development');
const h1 = React.createElement('h1',{style:{color:'red'}},'ABES Engineering College');
// root.render([h1,h2]);

// objects form => {key:value} => style{}
const img = React.createElement('img', {src:'photo-1773332585754-f1436987743b.avif',style:{height:'200px',width:'200px'}})
const div = React.createElement('div',{style:{border:'2px solid red'}},h1,h2,img);

// JSX and Babel
const h21 = <h2>Hello Bachoo</h2>
root.render(div);