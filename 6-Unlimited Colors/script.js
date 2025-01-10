const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

let intervalId;

//generate random color
const randomColor = function(){
    const hexValue = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hexValue[Math.floor(Math.random()*16)]
    }
    return color
}
// console.log(randomColor());

const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(function(){
            document.body.style.backgroundColor = randomColor()
        },1500)
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

start.addEventListener('click',startChangingColor);
stop.addEventListener('click',stopChangingColor)