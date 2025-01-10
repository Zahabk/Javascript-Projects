const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
        // console.log(event,event.target);
        body.setAttribute('id',btn.id)
    })
})