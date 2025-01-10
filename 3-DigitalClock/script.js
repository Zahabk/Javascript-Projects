const displayTime = document.getElementById('clock')


setInterval(function(){
    let date = new Date();
    displayTime.innerHTML = date.toLocaleTimeString()
},1000)