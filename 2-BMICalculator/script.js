const form = document.querySelector('form')

// This usecase will give you empty value 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        result.style.color = 'red'
        result.innerHTML = `Please give valid height`
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        result.style.color = 'red'
        result.innerHTML = `Please give valid weight`
    }
    else{
        result.style.color = '#f1f1f1'
        const bmi = (weight/((height*height)/10000)).toFixed(2);

        if(bmi<18.6){
            result.innerHTML = `<span>Your BMI weight: ${bmi}</span><br><span style="color:red">Oops!!You are Under Weight</span>`
        }
        else if(bmi>=18.6 && bmi<=24.9){
            result.innerHTML = `<span>Your BMI weight: ${bmi}</span><br><span style="color:green">Yeah!!Your weight is normal</span>`
        }
        else{
            result.innerHTML = `<span>Your BMI weight: ${bmi}</span><br><span style="color:red">Oops!!You are Overweight</span>`
        }
    }
})