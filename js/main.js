// declare the variable
// use variable to add event listener
// attach function to event listener
// make a variable and attach it to the input (input.val())
// make api call using ajax
// attach variable attached to input.val to api http request
// use .then to pass in argument inside parameter
// use dom to call on HTML element to attach to html then use string interpolation to make html elements to attach data. 

// const $input = $("input");
// const $button = $("button");
// const $aside = $("aside");

// // put a click event on the button

// $button.on('click', () => {
//     // get the text from the input
//     const searchTerm = $input.val();
//     // make the api call
//     $.ajax(`http://www.omdbapi.com/?apikey=57b31c86&t=${searchTerm}`).then(data => {
//         console.log(data);
//         $("aside").html(`<h1>${data.Title}</h1> <img src=${data.Poster} alt="Could not find the movie you wanted, try again"/>`)
//     })
// });



// get url on the browser
// make the api call
// console.log the data, makes sure you're getting api data
// console.log the things you're going to need
// then once these steps are finished, make the DOM calls

// from API:
// Current weather
// Minute forecast for 1 hour
// Hourly forecast for 48 hours
// Daily forecast for 7 days
// National weather alerts
// Historical weather data for the previous 5 days

// api call: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// api key: b7a0967e02a6f4443d97e920a7eee5f7

const $btn = $('button');
const $input = $(':text');
const $aside = $('aside');
const apiKey = "b7a0967e02a6f4443d97e920a7eee5f7";
const $weatherImg = $('.icon');
const $temp = $('.weather-temp');
const $weatherType = $('.weather-description');
const $weatherHumidity = $('.weather-humidity');
// const $inputVal = $(':text');
// const $placeHolder = $(':City Search');

$btn.on('click', (e) =>{
    e.preventDefault();
    const searchCity = $input.val();
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${apiKey}`)
    .then(data => {
        let humidity = data.main.humidity + "%";
            $weatherHumidity.append(humidity);
            // $weatherHumidity.text('Humidity')

        let description = data.weather[0].description;
            $weatherType.append(description)

        let tempDisplay = Math.floor(data.main.temp + "degrees");
            $temp.append(tempDisplay);

        let weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
            $weatherImg.attr('src', weatherIcon);
            console.log(data)
    })
})

