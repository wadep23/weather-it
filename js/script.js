var userInput = document.querySelector("#city");
var userFormEl = document.querySelector('#user-form');

var userCity = function(city){
    
    var getCoordApi = 
    "https://api.openweathermap.org/data/2.5/weather?appid=75011bac43d9fd1067de54fbcd6e3d47&q=" 
    + userInput.value.trim(' ');
    fetch(getCoordApi)
    .then(function(response){
        if (response.ok){
            response.json()
            .then(function(data){
                lon = data.coord.lon;
                lat = data.coord.lat;
                console.log(lon);
                console.log(lat);
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
    + lat + "&lon=" + lon;
    fetch(userWeatherApi)
    .then(function(response){
        if(response.ok){
            response.json()
            .then(function(data){
                console.log(data);
            })
        }else{
            console.log("Error in fetch function!");
        }
    })
}  

var formSubmitHandler = function(event){
    event.preventDefault();
    var city = userInput.value;
    // console.log(city);
    
    if (city){
        userCity(city);
        userInput.value = "";    
    }else{
        alert('Please enter a City');
    }
};
$("#submit").on("click", formSubmitHandler);

