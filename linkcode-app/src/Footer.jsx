import ReactDOM from "react-dom";

let dayCount=1;
function Footer(props){
  console.log(props.dayWhen);
return(
  <h3>
    {props.dayWhen} is my day {props.dayCount} of Learninig React
  </h3>
)
}
export default Footer;