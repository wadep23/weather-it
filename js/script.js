var userInput = document.querySelector("#city");
var userFormEl = document.querySelector('#user-form');


// var userWeatherApi = "https://api.openweathermap.org/data/2.5/onecall?appid=75011bac43d9fd1067de54fbcd6e3d47&" 
// var userCity = function(city){
    
//     var getCoordApi = "https://api.openweathermap.org/data/2.5/weather?appid=75011bac43d9fd1067de54fbcd6e3d47&q=" + userInput;
//         fetch(getCoordApi)
//             .then(function(response){
//                 if (response.ok){
//                     response.json()
//             .then(function(data){
//                     console.log(data);
//                 });
//             }else{
//                 alert('Error: ' + response.statusText);
//             }
//         })
//         .catch(function(error){
//             alert("Unable to connect to Weather API");
//         });            
// };

var formSubmitHandler = function(e){
    e.preventDefault();
    var city = userInput.value;
    
    if (city){
        usercity(city);
        userInput.value = "";                
        console.log(userInput);    
    }else{
        alert('Please enter a City');
    }
};
userFormEl.addEventListener('submit', formSubmitHandler);