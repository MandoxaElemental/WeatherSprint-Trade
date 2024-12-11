// Commented out in order for me to figure our this later
import { APIKEY, fiveDayKey } from './environments.js';   

let currentWeatherImg = document.getElementById('currentWeatherImg');
let name = document.getElementById('name');
let country = document.getElementById('country');
let time = document.getElementById('time');
let currentTemp = document.getElementById('currentTemp');
let fahrenheit = document.getElementById('fahrenheit');
let celsius = document.getElementById('celsius');
let weather = document.getElementById('weather');
let saved = document.getElementById('saved');
let search = document.getElementById('search');
let searchBtn = document.getElementById('searchBtn');
let high = document.getElementById('high');
let wind = document.getElementById('wind');
let low = document.getElementById('low');
let humidity = document.getElementById('humidity');
let day1h = document.getElementById('day1h');
let day1l = document.getElementById('day1l');
let weatherIcon1 = document.getElementById('weatherIcon1');
let day2h = document.getElementById('day2h');
let day2l = document.getElementById('day2l');
let weatherIcon2 = document.getElementById('weatherIcon2');
let day3h = document.getElementById('day3h');
let day3l = document.getElementById('day3l');
let weatherIcon3 = document.getElementById('weatherIcon3');
let day4h = document.getElementById('day4h');
let day4l = document.getElementById('day4l');
let weatherIcon4 = document.getElementById('weatherIcon4');
let day5h = document.getElementById('day5h');
let day5l = document.getElementById('day5l');
let weatherIcon5 = document.getElementById('weatherIcon5');
let savedArr = [];
let recentArr = [];


//Geo location is a built in API that allows the user to share there location apon request.

//navigator.geolocation this return geolocation object
//getCurrentPosition method lets the web app get the current position

navigator.geolocation.getCurrentPosition(success, errorFunc);
//You can think of this as an if statment if user accepts we run success else we run errorFunc

//Example of the geolocation Object below
{
    coords: {
        latitude: 0;
        longitude: 0;
    }
}

//If the user accepts we run success function
function success(position){
    console.log(position);
    console.log("Our latitude: " + position.coords.latitude);
    console.log("Our longitude: " + position.coords.longitude);
    console.log("We know where you are!");

}

//If the user denies we run errorFunc
function errorFunc(error){
    console.log(error.message);
}



//`api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${fiveDayKey}`

//Create the apiCall while using the APIKEY from the environment.js file
// Practice
function getData(){
    return fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        return data;
        console.log(data)
    }
)};

getData();

getData().then(data => {
    console.log(data)
       name.innerText = data.city.name;
       country.innerText = ", " + data.city.country;
       time.innerText = data.list[0].dt_txt;
       weather.innerText = data.list[0].weather[0].main;
       currentTemp.innerText = Math.round((data.list[0].main.temp * 9/5) - 459.67) + "°";
       high.innerText = Math.round((data.list[0].main.temp_max * 9/5) - 459.67) + "°F";
       low.innerText = Math.round((data.list[0].main.temp_min * 9/5) - 459.67) + "°F";
       wind.innerText = data.list[0].wind.speed + " mph";
       humidity.innerText = data.list[0].main.humidity + "%";
       day1h.innerText = "H: " + Math.round((data.list[0].main.temp_max * 9/5) - 459.67) + "°F";
       day1l.innerText = "L: " + Math.round((data.list[0].main.temp_min * 9/5) - 459.67) + "°F";
       day2h.innerText = "H: " + Math.round((data.list[1].main.temp_max * 9/5) - 459.67) + "°F";
       day2l.innerText = "L: " + Math.round((data.list[1].main.temp_min * 9/5) - 459.67) + "°F";
       day3h.innerText = "H: " + Math.round((data.list[2].main.temp_max * 9/5) - 459.67) + "°F";
       day3l.innerText = "L: " + Math.round((data.list[2].main.temp_min * 9/5) - 459.67) + "°F";
       day4h.innerText = "H: " + Math.round((data.list[3].main.temp_max * 9/5) - 459.67) + "°F";
       day4l.innerText = "L: " + Math.round((data.list[3].main.temp_min * 9/5) - 459.67) + "°F";
       //day5h.innerText = "H: " + data.list[4].main.temp_max + " °F";
       //day5l.innerText = "L: " + data.list[4].main.temp_min + " °F";

       if(weather.innerText.toLowerCase() == "rain"){
       document.getElementById('currentWeatherImg').src="../assets/rainy.png"}
    });
    
fahrenheit.addEventListener('click', function(){
    fahrenheit.className = 'active';
    celsius.className = 'inactive'
    getData().then(data => {
       currentTemp.innerText = Math.round((data.list[0].main.temp * 9/5) - 459.67) + "°";
       high.innerText = Math.round((data.list[0].main.temp_max * 9/5) - 459.67) + "°F";
       low.innerText = Math.round((data.list[0].main.temp_min * 9/5) - 459.67) + "°F";
       day1h.innerText = "H: " + Math.round((data.list[0].main.temp_max * 9/5) - 459.67) + "°F";
       day1l.innerText = "L: " + Math.round((data.list[0].main.temp_min * 9/5) - 459.67) + "°F";
       day2h.innerText = "H: " + Math.round((data.list[1].main.temp_max * 9/5) - 459.67) + "°F";
       day2l.innerText = "L: " + Math.round((data.list[1].main.temp_min * 9/5) - 459.67) + "°F";
       day3h.innerText = "H: " + Math.round((data.list[2].main.temp_max * 9/5) - 459.67) + "°F";
       day3l.innerText = "L: " + Math.round((data.list[2].main.temp_min * 9/5) - 459.67) + "°F";
       day4h.innerText = "H: " + Math.round((data.list[3].main.temp_max * 9/5) - 459.67) + "°F";
       day4l.innerText = "L: " + Math.round((data.list[3].main.temp_min * 9/5) - 459.67) + "°F";
       //day5h.innerText = "H: " + data.list[4].main.temp_max + " °F";
       //day5l.innerText = "L: " + data.list[4].main.temp_min + " °F";
    })
});
celsius.addEventListener('click', function(){
    fahrenheit.className = 'inactive';
    celsius.className = 'active'
    getData().then(data => {
           currentTemp.innerText = Math.round((Math.round((data.list[0].main.temp_max * 9/5) - 459.67) - 32) / (9/5)) + "°";
           high.innerText = Math.round((Math.round((data.list[0].main.temp_max * 9/5) - 459.67) - 32) / (9/5)) + "°C";
           low.innerText = Math.round((Math.round((data.list[0].main.temp_min * 9/5) - 459.67) - 32) / (9/5)) + "°C";;
           day1h.innerText = "H: " + Math.round((Math.round((data.list[0].main.temp_max * 9/5) - 459.67) - 32) / (9/5)) + "°C";
           day1l.innerText = "L: " + Math.round((Math.round((data.list[0].main.temp_min * 9/5) - 459.67) - 32) / (9/5)) + "°C";
           day2h.innerText = "H: " + Math.round((Math.round((data.list[1].main.temp_max * 9/5) - 459.67) - 32) / (9/5)) + "°C";
           day2l.innerText = "L: " + Math.round((Math.round((data.list[1].main.temp_min * 9/5) - 459.67) - 32) / (9/5)) + "°C";
           day3h.innerText = "H: " + Math.round((Math.round((data.list[2].main.temp_max * 9/5) - 459.67) - 32) / (9/5)) + "°C";
           day3l.innerText = "L: " + Math.round((Math.round((data.list[2].main.temp_min * 9/5) - 459.67) - 32) / (9/5)) + "°C";
           day4h.innerText = "H: " + Math.round((Math.round((data.list[3].main.temp_max * 9/5) - 459.67) - 32) / (9/5)) + "°C";
           day4l.innerText = "L: " + Math.round((Math.round((data.list[3].main.temp_min * 9/5) - 459.67) - 32) / (9/5)) + "°C";
           //day5h.innerText = "H: " + data.list[4].main.temp_max + " °F";
           //day5l.innerText = "L: " + data.list[4].main.temp_min + " °F";
        })
});

async function apiCall(){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${APIKEY}`);
    const data = await promise.json();
    console.log(data);
};
    
    apiCall();
