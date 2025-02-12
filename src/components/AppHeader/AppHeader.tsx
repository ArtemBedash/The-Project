import {Link} from "react-router-dom"
import './AppHeader.css'
export const AppHeader = () =>{

return(
<div>
    <Link to={"/"}>HomePage</Link>
    <Link to={"/ToDoList"}>ToDoList</Link>
</div>

);

}