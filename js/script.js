var userInput = document.querySelector("#city-name");
var userFormEl = document.querySelector('#user-form');
var recentSearch = document.querySelector('#recent-search');
var currentWeather = document.querySelector('#details');

var placeHolder = document.querySelector('#place-holder');
var currentDate = document.querySelector('#date');
var currentCity = document.querySelector('#city');
var curTemp = document.querySelector('#temp');
var curWind = document.querySelector('#wind');
var curHumid = document.querySelector('#humid');
var curUv = document.querySelector('#uv');
var icon = document.querySelector('#icon');

// var dayOneBody = document.querySelector('#one-body');
// var dayTwoBody = document.querySelector('#two-body');
// var dayThreeBody = document.querySelector('#three-body');
// var dayFourBody = document.querySelector('#four-body');
// var dayFiveBody = document.querySelector('#five-body');

var fdf = document.querySelector('#fdt');
var day1 = document.querySelector('#day1');
var day2 = document.querySelector('#day2');
var day3 = document.querySelector('#day3');
var day4 = document.querySelector('#day4');
var day5 = document.querySelector('#day5');

var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');

var dayOneTemp = document.querySelector('#temp1');
var dayOneWind = document.querySelector('#wind1');
var dayOneHumid = document.querySelector('#humid1');
var dayOneIcon = document.querySelector('#icon1');

var dayTwoTemp = document.querySelector('#temp2');
var dayTwoWind = document.querySelector('#wind2');
var dayTwoHumid = document.querySelector('#humid2');
var dayTwoIcon = document.querySelector('#icon2');

var dayThreeTemp = document.querySelector('#temp3');
var dayThreeWind = document.querySelector('#wind3');
var dayThreeHumid = document.querySelector('#humid3');
var dayThreeIcon = document.querySelector('#icon3');

var dayFourTemp = document.querySelector('#temp4');
var dayFourWind = document.querySelector('#wind4');
var dayFourHumid = document.querySelector('#humid4');
var dayFourIcon = document.querySelector('#icon4');

var dayFiveTemp = document.querySelector('#temp5');
var dayFiveWind = document.querySelector('#wind5');
var dayFiveHumid = document.querySelector('#humid5');
var dayFiveIcon = document.querySelector('#icon5');

var citiesArray = [];



var getCityCoord = function(city){
    
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
                // console.log(data);
                recentCity();
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
                weatherIcon = data.current.weather[0].icon;
                
                // Create variables for five day
                temp1 = data.daily[0].temp.day;
                humid1 = data.daily[0].humidity;
                wind1 = data.daily[0].wind_speed;
                weatherIcon1 = data.daily[0].weather[0].icon;

                temp2 = data.daily[1].temp.day;
                humid2 = data.daily[1].humidity;
                wind2 = data.daily[1].wind_speed;
                weatherIcon2 = data.daily[1].weather[0].icon;

                temp3 = data.daily[2].temp.day;
                humid3 = data.daily[2].humidity;
                wind3 = data.daily[2].wind_speed;
                weatherIcon3 = data.daily[2].weather[0].icon;

                temp4 = data.daily[3].temp.day;
                humid4 = data.daily[3].humidity;
                wind4 = data.daily[3].wind_speed;
                weatherIcon4 = data.daily[3].weather[0].icon;

                temp5 = data.daily[4].temp.day;
                humid5 = data.daily[4].humidity;
                wind5 = data.daily[4].wind_speed;
                weatherIcon5 = data.daily[4].weather[0].icon;

                 console.log('Look mom I made a thing!')               
                // console.log(data);

                // Populate values to HTML
                showWeather();
                fiveDay();
            })
        }else{
            console.log("Error in fetch function!");
        }
    })
    // Show variables on html    
    
    
    
    
};
// Current Weather
var showWeather = function(){
    createCityButton(cityName);

    currentDate.textContent = moment().format('dddd, MMMM Do');    
    currentCity.textContent = cityName;
    curTemp.textContent =  "Temp: " + temp;
    curWind.textContent =   "Wind: " + wind + "mph";
    curHumid.textContent =  "Humidity: " + humid + "%";
    curUv.textContent = "UV Index: " + uv;
    icon.textContent = weatherIcon;
    currentWeather.setAttribute('class', 'card');
    currentCity.setAttribute('class', 'card-header');
    placeHolder.setAttribute('class', 'card-body');

}
// five day
var fiveDay = function(){
    fdf.textContent = "5-Day Forcast: ";
    one.setAttribute('class', 'card');
    day1.textContent = moment().add(1, 'd').format('dddd, MMMM Do');
    day1.setAttribute('class', 'card-header');
    dayOneTemp.textContent =  "Temp: " + temp1;
    dayOneWind.textContent =   "Wind: " + wind1 + "mph";
    dayOneHumid.textContent =  "Humidity: " + humid1 + "%";
    dayOneIcon.textContent = weatherIcon1;

    two.setAttribute('class', 'card');
    day2.textContent = moment().add(2, 'd').format('dddd, MMMM Do');
    day2.setAttribute('class', 'card-header');
    dayTwoTemp.textContent =  "Temp: " + temp2;
    dayTwoWind.textContent =   "Wind: " + wind2 + "mph";
    dayTwoHumid.textContent =  "Humidity: " + humid2 + "%";
    dayTwoIcon.textContent = weatherIcon2;

    three.setAttribute('class', 'card');
    day3.textContent = moment().add(3, 'd').format('dddd, MMMM Do');
    day3.setAttribute('class', 'card-header');
    dayThreeTemp.textContent =  "Temp: " + temp3;
    dayThreeWind.textContent =   "Wind: " + wind3 + "mph";
    dayThreeHumid.textContent =  "Humidity: " + humid3 + "%";
    dayThreeIcon.textContent = weatherIcon3;

    four.setAttribute('class', 'card');
    day4.textContent = moment().add(4, 'd').format('dddd, MMMM Do');
    day4.setAttribute('class', 'card-header');
    dayFourTemp.textContent =  "Temp: " + temp4;
    dayFourWind.textContent =   "Wind: " + wind4 + "mph";
    dayFourHumid.textContent =  "Humidity: " + humid4 + "%";
    dayFourIcon.textContent = weatherIcon4;

    five.setAttribute('class', 'card');
    day5.textContent = moment().add(5, 'd').format('dddd, MMMM Do');
    day5.setAttribute('class', 'card-header');
    dayFiveTemp.textContent =  "Temp: " + temp5;    
    dayFiveWind.textContent =   "Wind: " + wind5 + "mph";
    dayFiveHumid.textContent =  "Humidity: " + humid5 + "%";
    dayFiveIcon.textContent = weatherIcon5;
}
// Function to store city to local storage
var recentCity = function(){
    if (citiesArray.length > 4) citiesArray.shift();
    citiesArray.push(cityName);
    localStorage.setItem("cities", citiesArray);
}
// Create a button with local storage data for recent searches
var createCityButton = function(){ 
    // var checkList = recentSearch.children.length;

    if (recentSearch.children.length < 4){
        localStorage.getItem('cities', citiesArray);
        var recent = document.createElement('button');
        recent.setAttribute('class', 'btn btn-success');                
        recent.setAttribute('id', 'recent');
        recent.textContent = cityName;
        recentSearch.appendChild(recent);                
    }else{
        recentSearch.removeChild(recentSearch.childNodes[0]);
    }
}
// $('#recent').on('click', getCityCoord(city));
// var limitCityButtons = function(){
// }

// City submit on click function
var formSubmitHandler = function(event){
    event.preventDefault();
    city = userInput.value;
    
    
    if (city){
        getCityCoord(city);        
        userInput.value = "";    
    }else{
        alert('Please enter a City');
    }
};
// On click 
$("#submit").on("click", formSubmitHandler);



