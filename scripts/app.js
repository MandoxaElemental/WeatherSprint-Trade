// Commented out in order for me to figure our this later
import { APIKEY } from './environments.js';   


let name = document.getElementById('name');
let time = document.getElementById('time');
let currentTemp = document.getElementById('currentTemp');
let weather = document.getElementById('weather');
let saved = document.getElementById('saved');
let search = document.getElementById('search');
let searchBtn = document.getElementById('searchBtn');
let high = document.getElementById('high');
let wind = document.getElementById('wind');
let low = document.getElementById('low');
let humidity = document.getElementById('humidity');
let da1h = document.getElementById('dat1h');
let day1l = document.getElementById('day1l');
let day2h = document.getElementById('dat2h');
let day2l = document.getElementById('day2l');
let day3h = document.getElementById('dat3h');
let day3l = document.getElementById('day3l');
let day4h = document.getElementById('dat4h');
let day4l = document.getElementById('day4l');
let day5h = document.getElementById('dat5h');
let day5l = document.getElementById('day5l');
let savedArr = [];


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




//Create the apiCall while using the APIKEY from the environment.js file

function apiCall () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
};

apiCall();