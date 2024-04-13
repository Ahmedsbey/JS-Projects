const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const apiKey = `c3fdc1d0036156bf7bd69ff84d590038`
let city = ``
const input = document.querySelector('#cityName')
const search = document.querySelector('#search')
const par = document.querySelector('#p')
search.addEventListener('click', async(e)=>{
    e.preventDefault()
    city = input.value
   await run()
})


async function run(){
   response = await fetch(`${api}${city}&appid=${apiKey}`)
   let data = await response.json()
        // city = input.value
   console.log(input.value)
   par.innerHTML = `${input.value}<p>${data.main.temp}</p>`
    
}