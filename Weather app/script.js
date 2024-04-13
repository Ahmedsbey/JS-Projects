const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const apiKey = `c3fdc1d0036156bf7bd69ff84d590038`
let city = ``
const input = document.querySelector('#cityName')
const search = document.querySelector('#search')
const cityname = document.querySelector('#city')
const temperature = document.querySelector('#temp')
const wind = document.querySelector('#wind')
const humidity = document.querySelector('#humidity')

search.addEventListener('click', async(e)=>{
    e.preventDefault()
    city = input.value
   await run()
})
async function run(){
   response = await fetch(`${api}${city}&appid=${apiKey}`)
   let data = await response.json()
   // console.log(data)
   // console.log(input.value)
   cityname.innerHTML = `${input.value.toUpperCase()}`
   temperature.innerHTML = `${(data.main.temp.toFixed(0))}°C`
   wind.innerHTML = `${data.wind.speed.toFixed(0)} KMPH`
   humidity.innerHTML = `${data.main.humidity}%`

}