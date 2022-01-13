const selectedEl = $("#search-city");
const cityChosen = document.getElementById("current-city");
const temp = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const uvIndex = document.getElementById("uv");

const cityArray = [];
const city = "";
const weatherURL = 'api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid={API key}'
const APIKey = "9269e7b9a6f4461a2d2de25c5288d244";

const weatherboardAPI = cityArray + city + APIKey;


function getWeather(){
fetch(weatherboardAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
    })
}