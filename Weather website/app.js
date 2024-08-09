var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
//api key
apik = "2d34ed3f660e5abdb9707a2678f3ff9d";


//convert fetched temp from F to C
function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputvalue.value+ '&appid=' + apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval = data['name'];
        var descrip = data['weather']['0']['description'];
        var temper = data['main']['temp'];
        var windsp = data['wind']['speed'];

        city.innerHTML = `Weather in <span>${nameval}<span>`;
        temp.innerHTML = `Temperature: <span>${ convertion(temper)} °C</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
        wind.innerHTML = `Wind Speed: <span>${windsp} km/h<span>`;
    })

    .catch(err => alert('You entered Wrong city name'));
}) 














