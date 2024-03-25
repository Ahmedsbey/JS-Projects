let form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('#result')
console.log(weight)
    if(height === '' || height < 1 || isNaN(height)){
result.innerHTML = `Please give a valid height`
    }else if(weight === '' || weight < 1 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight`
            }else{
                const bmi = (weight / ((height * height)/10000)).toFixed(2);
                result.innerHTML = bmi
                if(bmi < 18.6){
                    result.innerHTML += `You are Under weight`
                }if(bmi >= 18.6 && bmi <= 24.9){
                    result.innerHTML += `You are in Normal Range`
                }if(bmi > 24.9){
                    result.innerHTML += `You are Oveweight`
                }
            }
})