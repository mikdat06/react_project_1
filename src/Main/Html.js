import img from '../img/HTML.png'

const HTML = ()=>{
    return(
        <>
    
     <div class="lesson_lesson">
      <div>
        <img src={img} alt="HTML" />
      </div>
      <div class="lesson_text">
        <p class="lesson_parag">
          <span class="lesson_span">Lesson Name :</span>
          HTML
        </p>
        <p class="lesson_parag">
          <span class="lesson_span">Lesson Hour :</span>
          10:00 am
        </p>
      </div>
    </div>
    
    </>
    )
}
export default HTML