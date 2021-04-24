var userInput = document.querySelector("#city-name");
var userFormEl = document.querySelector('#user-form');
var recentSearch = document.querySelector('#recent-search');
var currentWeather = document.querySelector('#details');
var currentDate = document.querySelector('#date');
var currentCity = document.querySelector('#city');
var curTemp = document.querySelector('#temp');
var curWind = document.querySelector('#wind');
var curHumid = document.querySelector('#humid');
var curUv = document.querySelector('#uv');
var icon = document.querySelector('#icon');




var userCity = function(city){
    
    var getCoordApi = 
    "https://api.openweathermap.org/data/2.5/weather?appid=75011bac43d9fd1067de54fbcd6e3d47&q=" 
    + userInput.value.trim(' ');
    fetch(getCoordApi)
    .then(function(response){
        if (response.ok){
            response.json()
            .then(function(data){
                // create variables for longitude and lattitude
                lon = data.coord.lon;
                lat = data.coord.lat;
                // create city variable
                cityName = data.name;
                console.log(cityName);
                console.log(data);
                userWeather();
            });
        }else{
            alert('Error: ' + response.statusText);
        }
    })
    .catch(function(error){
        alert("Unable to connect to Weather API");
    });
};

var userWeather = function(weather){
    var userWeatherApi = "https://api.openweathermap.org/data/2.5/onecall?appid=75011bac43d9fd1067de54fbcd6e3d47&lat=" 
    + lat + "&lon=" + lon + "&units=imperial";
    fetch(userWeatherApi)
    .then(function(response){
        if(response.ok){
            response.json()
            .then(function(data){
                // create variabels for weather conditions
                temp = data.current.temp;
                humid = data.current.humidity;
                wind = data.current.wind_speed;
                uv = data.current.uvi;
                weatherIcon = data.current.weather[3];                
                console.log(data);                
                // Populate values to HTML
                showWeather();
            })
        }else{
            console.log("Error in fetch function!");
        }
    })
    // Show variables on html    
    
    
    
    
};
var showWeather = function(){

    currentDate.textContent = moment().format('dddd, MMMM Do');    
    currentCity.textContent = cityName;
    curTemp.textContent = temp;
    curWind.innerHTML = wind;
    curHumid.innerHTML = humid;
    curUv.textContent = uv;
    icon.textContent = weatherIcon;
    console.log(weatherIcon);
}
// City submit on click function
var formSubmitHandler = function(event){
    event.preventDefault();
    var city = userInput.value;   
    
    if (city){
        userCity(city);
        userInput.value = "";    
    }else{
        alert('Please enter a City');
    }
};


// On click 
$("#submit").on("click", formSubmitHandler);

