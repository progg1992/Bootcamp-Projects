
// My API Key from OpenWeather
var APIkey = "6199e90c9358dfd397f2a94006cb5625";
var cityName = $("<h3>");
var weatherDetails = $("#weather-details");
var citySearchArr = localStorage.getItem('cityHistory') || []
// If citySearchArr has length
// Then loop through citySearch and create a button for every entry
// Append button to the DOM
// Create a listener for the container of the buttons to perform a new search when one is clicked




// Create a variable for the current date display
var currentDate = $('#currentDay');
// Display the current date at the top of the page
currentDate.text(moment().format('MMMM Do, YYYY'));

// Event listener for the search button
$("#find-city").on("click", function(event) {

    event.preventDefault();

    // Here we grab the text from the input box
    var city = $("#city-input").val().trim();

    // Building the url needed to query the OpenWeather database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        // Creating a new list item and storing it in a variable
        var listItem = $("<li>");
        // Setting the text for the list item equal to the city's name
        listItem.text(response.name);
        // Appending the list item to the list
        $("#city-names").append(listItem)
        // Creating a new h3 and storing it in a variable
        cityName.text(response.name);
        $("#weather-details").append(cityName);
        // Creating a variable for the temperature
        var temperature = $("<p>");
        temperature.text("Temperature: " + convertTemp(response.main.temp) + "°F");
        $("#weather-details").append(temperature);
        // Creating a variable for the humidity
        var humidity = $("<p>");
        humidity.text("Humidity: " + response.main.humidity + "%");
        $("#weather-details").append(humidity);
        // Creating a variable for the wind-speed
        var windSpeed = $("<p>");
        windSpeed.text("Wind Speed: " + response.wind.speed + "mph");
        $("#weather-details").append(windSpeed);
        
        var lon = response.coord.lon;
        var lat = response.coord.lat;
        var indexQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey;

        $.ajax({
            url: indexQueryURL,
            method: "GET"
        }).then(function(response) {
            var UVindex = $("<p>");
            UVindex.text("UV index: " + response.current.uvi);
            $("#weather-details").append(UVindex);
        })
        fiveDayForecast(city);
      });
      weatherDetails.empty()
    });

    function convertTemp(temperature){
        return Math.floor((temperature - 273.15) * 1.8 + 32);
    }

    // A function to get the five day forecast
    function fiveDayForecast(city){

        var fiveDayQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city + "&appid=" + APIkey;

        $.ajax({
            url: fiveDayQueryURL,
            method: "GET"
        }).then(function(response) {
    
            var list = response.list
            
            for(var i = 0; i < list.length; i+=8) {
                var date = list[i].dt_txt
                var dateP = $("<p>").text(date)
                var temp = JSON.stringify(list[i].main.temp)
                var tempP = $("<p>").text("Temperature: " + temp)
                var humid = list[i].main.humidity
                var humidP = $("<p>").text("Humidity: " + humid)
                var icon =list[i].weather[0].icon
                var iconURL = "http://openweathermap.org/img/wn/" + icon + ".png"
                var iconIMG = $("<img>").attr("src", iconURL)
                var elNumber = (i/8)
                $('#col' + elNumber).html(dateP)
                $('#col' + elNumber).append(iconIMG)
                $('#col' + elNumber).append(tempP)
                $('#col' + elNumber).append(humidP)
            }
        })}
// Push new Item
localStorage.setItem



