import HTML from "../Main/Html"
import CSS from "../Main/Css"
import JAVASCRIPT from "../Main/Js"
import REACT from "../Main/React"
import BOOTSTRAP from "../Main/BootStrap"
import MUI from "../Main/MUI"
const Main = ()=>{
    return(
        <>
       <div className="container ">
        <div className="row">
         <HTML/>
         <CSS/>
         <JAVASCRIPT/>
         <REACT/>
         <BOOTSTRAP/>
         <MUI/>
         </div>
       </div>
        </>
    )
}
export default Main