import  ReactDOM  from "react-dom";
import App from "./App";
import './index.css'
import {BrowserRouter} from 'react-router-dom'
const RaasCawad =()=>{
    return (
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    )
}

ReactDOM.render(<RaasCawad />, document.getElementById("root"));