import  ReactDOM  from 'react-dom';
import style from './index.css' //for external css


let imgscr='https://linkcode.in/assets/linkcodelogo.png'
let imgStyle={
width:'25%',
height:'50%',
float:'centre',
};

ReactDOM.render(
  <div style = {headStyle}>
<h1  >Welcome to Linkcode Technologies</h1>


<img src={imgsrc} style={imgstyle}/>
<h3 align='center'>{`Today we are in ${count}`}</h3>
<Footer/>
</div>, 
document.getElementById("root")
);





// const h1=document.createElement('h1')
// h1.innerHTML='I am learning React'

// document.getElementById("root").appendChild()