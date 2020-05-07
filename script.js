var button = document.querySelector('.button');
var city = document.querySelector('.city');
var displaycity = document.querySelector('.displaycity');
var weather = document.querySelector('.weather');
var temp = document.querySelector('.temp');

  
button.addEventListener('click', function(){

fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=imperial&appid=58026d375fc780e495253cb20fdb3452')
.then(response => response.json())
.then(data => {
    console.log(data);

    var iconValue = data.weather[0].icon;
    var cityname = data.name;
    console.log(cityname);
    var weatherValue = data.main.temp;

    // console.log("http://openweathermap.org/img/wn/" + iconValue + ".png");

    document.getElementById('icon').setAttribute('src', "http://openweathermap.org/img/wn/" + iconValue + ".png") ;

    displaycity.innerHTML = cityname;
    temp.innerHTML = weatherValue;
    // console.log(weatherValue + " in " + data.name);
})

.catch(err => console.log("Nah cuz wrond city"))
    
});
