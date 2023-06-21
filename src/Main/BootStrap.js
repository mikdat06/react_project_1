import img from "../img/Bootstrap.png"

const BOOTSTRAP=()=> {
  return (
    <div class="lesson_lesson col col-md-6 col-lg-4">
    <div>
      <img src={img} alt="BOOTSTRAP" />
    </div>
    <div class="lesson_text">
      <p class="lesson_parag">
        <span class="lesson_span">Lesson Name :</span>
        REACT
      </p>
      <p class="lesson_parag">
        <span class="lesson_span">Lesson Hour :</span>
        14:15 pm
      </p>
    </div>
  </div>
  )
}
export default BOOTSTRAP
