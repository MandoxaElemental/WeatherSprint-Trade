// Commented out in order for me to figure our this later
import { APIKEY, fiveDayKey } from './environments.js';
import { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage} from "./localstorage.js";


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
let fetchLink = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKEY}`;
let recentList = false;
let saveList = false;


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



async function apiCall(){
    const promise = await fetch(fetchLink);
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
};

    apiCall();

console.log(cityName);

search.addEventListener('click', function(e){
    document.getElementById("myDropdown").classList.toggle("show");
});
saved.addEventListener('click', function(e){
    document.getElementById("savedDropdown").classList.toggle("show");
});

search.addEventListener('keypress', (e) => {
    if(event.key === 'Enter'){
        cityName = search.value;
        search.value = "";
        console.log(cityName);
        fetchLink = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKEY}`;
        
        recentArr.push(cityName);

        myDropdown.innerHTML = "";
        
        if(recentArr.length > 5){
            recentArr.shift();
        }
            
        for(let i=0; i < recentArr.length; i++){
            let listItem = document.createElement("p");
            listItem.setAttribute("id", 'city_' + i);
            listItem.addEventListener('click', function(e) {
                cityName = listItem.textContent;
                fetchLink = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKEY}`;
                apiCall();
            });
            listItem.textContent = recentArr[i];
            let saveBtn = document.createElement('button');
            saveBtn.type = 'button';
            saveBtn.className = "saveBtn";
            saveBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>`;
            myDropdown.appendChild(listItem);
            listItem.appendChild(saveBtn);
            console.log(recentArr)
        }
        apiCall();
    };
});