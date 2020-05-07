

var button = document.querySelector('.button');
var city = document.querySelector('.city');
// var icon = document.querySelector('.icon');
// var weather = document.querySelector('.weather');
// var temp = document.querySelector('.temp');

  
button.addEventListener('click', function(){

fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=58026d375fc780e495253cb20fdb3452')
.then(response => response.json())
.then(data => console.log(data))

.catch(err => console.log("Nah cuz wrond city"))
    
});
