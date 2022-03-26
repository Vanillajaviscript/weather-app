//aggregate variables to call within event listener
const $btn = $('button');
const $input = $(':text');
const apiKey = "b7a0967e02a6f4443d97e920a7eee5f7";
const $weatherImg = $('.icon');
const $temp = $('.weather-temp');
const $weatherType = $('.weather-description');
const $weatherHumidity = $('.weather-humidity');
const $msg = $('.message');
const $form = $('.form');
const $pTag = $('p');
const $weatherFeels = $('.weather-feels')
const imageUrl = "https://openweathermap.org/img/w/";
const $cityName = $('#city-display');

$btn.on('click', (e) =>{
    e.preventDefault();
    $msg.text("");
    $cityName.text("");
    const searchCity = $input.val();
        $pTag.text("")
        $form[0].reset();
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${apiKey}`)
    .then(data => {
        // variables to extract properties from API to display to HTML
        let cityName = data.name;
            $cityName.append(cityName);
        let weatherIcon = imageUrl + data.weather[0].icon + ".png";
            $weatherImg.attr('src', weatherIcon);

        let humidity = "Humidity: " + data.main.humidity + "%";
            $weatherHumidity.append(humidity);

        let description = "Weather: " + data.weather[0].description;
            $weatherType.append(description)
        
        let tempDisplay = data.main.temp;
            tempDisplay = "Temperature: " + Math.floor(data.main.temp) + " °C";
            $temp.append(tempDisplay);
            
        let feelsLike = data.main.feels_like;
                  feelsLike = "Feels like: " + Math.floor(data.main.feels_like) + " °C";
                  $weatherFeels.append(feelsLike);

    // catch to alert user to non-city input      
    }).catch(() => {
        if($input.val() !== searchCity) {
            $msg.text("That city must be from a different API of a different planet")
        } 
    })  
})

