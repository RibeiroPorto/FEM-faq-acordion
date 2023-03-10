const questionButtons = document.getElementsByClassName('faq-question')
const answerTexts = document.getElementsByClassName('faq-answer')
const questionButtonArrow = document.querySelectorAll('.faq-question img')

console.log(questionButtonArrow)

var answerShown = 0

function makeAnswerVisible(index){
    if(answerTexts[index].style.visibility==="visible"){
        answerTexts[index].style.visibility='hidden'
        questionButtonArrow[index].style.transform="rotate(0deg)"
        
    }else{
        answerTexts[index].style.visibility='visible'
        questionButtonArrow[index].style.transform="rotate(180deg)"
    }
}

function rotateArrowQuestion(index){
    
}

Array.from(questionButtons).forEach((button,index) =>{
    button.addEventListener('click', ()=>{
        console.log(index)
        makeAnswerVisible(index)
        
        
    })
})