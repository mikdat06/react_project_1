import img from "./img/Clarusway.png"

function Header(){
    return<>
    <header>
          <nav class="nav">
            <img className="clarusway" src={img} alt="" />
            
          </nav>
          <h1>Lesson Reminder</h1>
        </header>
    </>
}
export default Header;