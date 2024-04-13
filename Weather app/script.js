const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const apiKey = `c3fdc1d0036156bf7bd69ff84d590038`
let city = ``
const input = document.querySelector('#cityName')
const search = document.querySelector('#search')
const cityname = document.querySelector('#city')
const errorp = document.querySelector('#error')
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
   try {
      if(!response.ok){
         throw new Error('not found or server error, Please enter a valid city name')
      }
      let data = await response.json()
      cityname.innerHTML = `${input.value.toUpperCase()}`
      temperature.innerHTML = `${(data.main.temp.toFixed(0))}°C`
      wind.innerHTML = `${data.wind.speed.toFixed(0)} KMPH`
      humidity.innerHTML = `${data.main.humidity}%`
   } catch (error) {
      console.error(error.message)
      errorp.innerHTML = `${input.value} ${error.message}`
    
   }
}