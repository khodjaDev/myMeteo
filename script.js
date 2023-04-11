const API_KEY = "fc07e5077f5c4bb125d715784664bd0e"

const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=fr&q=`; 

const searchBox = document.getElementById('input');
const searchBtn = document.getElementById('search');
const image = document.getElementById('image');

async function checkWeather(city){
    const response = await fetch(API_URL + city +`&appid=${API_KEY}&lang=fr`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + " °C"
    document.querySelector(".wind").innerHTML = Math.floor( data.wind.speed) + "Km/h"
    document.querySelector(".humidityy").innerHTML = data.main.humidity + "%"
    document.querySelector(".maindescri").innerHTML = data.weather[0].description
    document.querySelector(".mbar").innerHTML = data.main.pressure + "mbar"
    document.querySelector(".ressentie").innerHTML = Math.round(data.main.feels_like) + " °C"
    document.querySelector(".openweathermap").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    console.log(`http://openweathermap.org/img/w100/${data.weather[0].icon}.png`);
    document.querySelector(".Aqui").innerHTML = data.weather[0].main

}
    searchBtn.addEventListener('click' , ()=>{
        checkWeather(searchBox.value)
    })
checkWeather()