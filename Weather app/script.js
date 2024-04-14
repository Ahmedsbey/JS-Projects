const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const apiKey = `c3fdc1d0036156bf7bd69ff84d590038`
let city = ``
const input = document.querySelector('#search')
const search = document.querySelector('#searchBtn')
const cityname = document.querySelector('#location')
const temperature = document.querySelector('#temperature')
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
    alert(error.message)
   }
}