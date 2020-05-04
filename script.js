$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Williston&units=imperial&appid=58026d375fc780e495253cb20fdb3452", function(data){
    console.log(data);
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = data.main.temp;
    var weather = data.weather[0].main;

    console.log(icon, weather, temp);
    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);

});