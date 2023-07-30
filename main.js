const apiKey = "fc1036bf842d2e543f7bc6d62a710b4b"
var input = document.querySelector(".search input")
var button = document.querySelector(".search button")
var temp = document.querySelector(".states .temp")
var humidity = document.querySelector(".humidity")
var wind = document.querySelector(".wind")
var city = document.querySelector(".city")
var weathre_icon = document.querySelector(".states img")
var states = document.querySelector(".states")
var details = document.querySelector(".details")


async function cheackWeather(apiUrl) {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json();
    if (data['cod'] === 200) {
        temp.innerText = ""
        humidity.innerText = ""
        wind.innerText = ""
        city.innerText = ""
        weathre_icon.src = ""
        temp.innerText = (data['main']['temp'] - 273.15).toFixed(0) + "°c"
        humidity.innerText = data['main']['humidity'] + "%"
        wind.innerText = data['wind']['speed'] + "km/h"
        city.innerText = data['name']
        weathre_icon.src = `images/${data['weather']['0']['main']}.png`
        states.style = 'display:block'
        details.style = 'display:flex'
    }

    
}
button.addEventListener("click", () => {
    if (input.value !== '') {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}`
        cheackWeather(apiUrl)
    }
})

