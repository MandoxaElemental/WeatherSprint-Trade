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
let day1weather = "";
let day2h = document.getElementById('day2h');
let day2l = document.getElementById('day2l');
let weatherIcon2 = document.getElementById('weatherIcon2');
let day2weather = "";
let day3h = document.getElementById('day3h');
let day3l = document.getElementById('day3l');
let weatherIcon3 = document.getElementById('weatherIcon3');
let day3weather = "";
let day4h = document.getElementById('day4h');
let day4l = document.getElementById('day4l');
let weatherIcon4 = document.getElementById('weatherIcon4');
let day4weather = "";
let day5h = document.getElementById('day5h');
let day5l = document.getElementById('day5l');
let weatherIcon5 = document.getElementById('weatherIcon5');
let day5weather = "";
let cityName = "Stockton"
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

search.addEventListener('keypress', (e) => {
    if(event.key === 'Enter'){
        cityName = search.value;
        console.log(cityName);
        if(cityName){
            if(savedArr.Length == 5){
                savedArr.slice(1)
                savedArr.push(cityName);
            }
            else{
                savedArr.push(cityName);
            }
        }
        console.log(savedArr)
    }
})


//`api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${fiveDayKey}`

//Create the apiCall while using the APIKEY from the environment.js file
// Practice


async function apiCall(){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKEY}`);
    const data = await promise.json();
    console.log(data);
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
       day1weather = data.list[0].weather[0].main;
       day2h.innerText = "H: " + Math.round((data.list[1].main.temp_max * 9/5) - 459.67) + "°F";
       day2l.innerText = "L: " + Math.round((data.list[1].main.temp_min * 9/5) - 459.67) + "°F";
       day2weather = data.list[1].weather[0].main;
       day3h.innerText = "H: " + Math.round((data.list[2].main.temp_max * 9/5) - 459.67) + "°F";
       day3l.innerText = "L: " + Math.round((data.list[2].main.temp_min * 9/5) - 459.67) + "°F";
       day3weather = data.list[2].weather[0].main;
       day4h.innerText = "H: " + Math.round((data.list[3].main.temp_max * 9/5) - 459.67) + "°F";
       day4l.innerText = "L: " + Math.round((data.list[3].main.temp_min * 9/5) - 459.67) + "°F";
       day4weather = data.list[3].weather[0].main;
       day5h.innerText = "H: " + Math.round((data.list[4].main.temp_max * 9/5) - 459.67) + "°F";
       day5l.innerText = "L: " + Math.round((data.list[4].main.temp_min * 9/5) - 459.67) + "°F";
       day5weather = data.list[4].weather[0].main;

       fahrenheit.addEventListener('click', function(){
        fahrenheit.className = 'active';
        celsius.className = 'inactive'
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
           day5h.innerText = "H: " + Math.round((data.list[4].main.temp_max * 9/5) - 459.67) + "°F";
           day5l.innerText = "L: " + Math.round((data.list[4].main.temp_min * 9/5) - 459.67) + "°F";
    });

    celsius.addEventListener('click', function(){
        fahrenheit.className = 'inactive';
        celsius.className = 'active'
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
               day5h.innerText = "H: " + Math.round((Math.round((data.list[4].main.temp_max * 9/5) - 459.67) - 32) / (9/5)) + "°C";
               day5l.innerText = "L: " + Math.round((Math.round((data.list[4].main.temp_min * 9/5) - 459.67) - 32) / (9/5)) + "°C";
    });

    if(weather.innerText == "Rain"){
        document.getElementById('currentWeatherImg').src="../assets/rainy.png"
    }else if(weather.innerText == "Clear"){
        document.getElementById('currentWeatherImg').src="../assets/sunny.png"
    }else if(weather.innerText == "Clouds"){
        document.getElementById('currentWeatherImg').src="../assets/cloud.png"
    }else if(weather.innerText == "Snow"){
        document.getElementById('currentWeatherImg').src="../assets/snow.png"
    };
    
    if(day1weather == "Rain"){
        document.getElementById('weatherIcon1').src="../assets/rainy.png"
    }else if(day1weather == "Clear"){
        document.getElementById('weatherIcon1').src="../assets/sunny.png"
    }else if(day1weather == "Clouds"){
        document.getElementById('weatherIcon1').src="../assets/cloud.png"
    }else if(day1weather == "Snow"){
        document.getElementById('weatherIcon1').src="../assets/snow.png"
    };

    if(day2weather == "Rain"){
        document.getElementById('weatherIcon2').src="../assets/rainy.png"
    }else if(day2weather == "Clear"){
        document.getElementById('weatherIcon2').src="../assets/sunny.png"
    }else if(day2weather == "Clouds"){
        document.getElementById('weatherIcon2').src="../assets/cloud.png"
    }else if(day2weather == "Snow"){
        document.getElementById('weatherIcon2').src="../assets/snow.png"
    };

    if(day3weather == "Rain"){
        document.getElementById('weatherIcon3').src="../assets/rainy.png"
    }else if(day3weather == "Clear"){
        document.getElementById('weatherIcon3').src="../assets/sunny.png"
    }else if(day3weather == "Clouds"){
        document.getElementById('weatherIcon3').src="../assets/cloud.png"
    }else if(day3weather == "Snow"){
        document.getElementById('weatherIcon3').src="../assets/snow.png"
    };

    if(day4weather == "Rain"){
        document.getElementById('weatherIcon4').src="../assets/rainy.png"
    }else if(day4weather == "Clear"){
        document.getElementById('weatherIcon4').src="../assets/sunny.png"
    }else if(day4weather == "Clouds"){
        document.getElementById('weatherIcon4').src="../assets/cloud.png"
    }else if(day4weather == "Snow"){
        document.getElementById('weatherIcon4').src="../assets/snow.png"
    };

    if(day5weather == "Rain"){
        document.getElementById('weatherIcon5').src="../assets/rainy.png"
    }else if(day5weather == "Clear"){
        document.getElementById('weatherIcon5').src="../assets/sunny.png"
    }else if(day5weather == "Clouds"){
        document.getElementById('weatherIcon5').src="../assets/cloud.png"
    }else if(day5weather == "Snow"){
        document.getElementById('weatherIcon5').src="../assets/snow.png"
    }

    console.log(day1weather)
    console.log(day2weather)
    console.log(day3weather)
    console.log(day4weather)
    console.log(day5weather)
};
    
    apiCall();


