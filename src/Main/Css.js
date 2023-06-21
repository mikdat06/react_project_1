import img from "../img/CSS3_logo.png"

const CSS = ()=>{
    return(
    <>
     <div class="lesson_lesson col col-md-6 col-lg-4">
              <div>
                <img src={img} alt="CSS" />
              </div>
              <div class="lesson_text">
                <p class="lesson_parag">
                  <span class="lesson_span">Lesson Name :</span>
                  CSS
                </p>
                <p class="lesson_parag">
                  <span class="lesson_span">Lesson Hour :</span>
                  11:15 am
                </p>
              </div>
            </div>
    </>)
}
export default CSS;