var button = document.querySelector('.button');
var city = document.querySelector('.city');   //user input
var displaycity = document.querySelector('.displaycity');
var weather = document.querySelector('.weather');
var temp = document.querySelector('.temp');
var wrongcity = document.querySelector('.wrongcity');
var weathercontainer = document.querySelector('.weather-container');

city.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();

     button.addEventListener('click',      alert("test test"));
    }
  });

  
button.addEventListener('click', function(){

    wrongcity.style.display = "none";
    weathercontainer.style.display = "block";

fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=imperial&appid=58026d375fc780e495253cb20fdb3452')
.then(response => response.json())
.then(data => {
    console.log(data);

    var iconValue = data.weather[0].icon;
    var cityname = data.name;
    var weatherValue = data.main.temp;
    var weathercondition = data.weather[0].main;

    // console.log("http://openweathermap.org/img/wn/" + iconValue + ".png");

    document.getElementById('icon').setAttribute('src', "http://openweathermap.org/img/wn/" + iconValue + ".png") ;

    displaycity.innerHTML = cityname;
    temp.innerHTML = weatherValue + " &#176F";
    weather.innerHTML = weathercondition;
    
    // console.log(weatherValue + " in " + data.name);
})

.catch(err => {
    
    weathercontainer.style.display = "none";
    wrongcity.style.display = "block";


    });
    
});
