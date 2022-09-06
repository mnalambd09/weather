const api_key =  `e69f72450ea993ae048899c7f86212ea`; 
const loadWeatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}



const displayWeather = (data) => {
    setinnterTextById('tempareture', data.main.temp);
    setinnterTextById('display-condition', data.weather[0].description);
    setinnterTextById('display-wind', data.wind.speed);
    setinnterTextById('display-wind-deg', data.wind.deg);
    console.log(data);
}
document.getElementById('btn-input').addEventListener('click', function(){
    const inputField = document.getElementById('inputField');
    const city = inputField.value;
    document.getElementById('displayCity').innerText = city;
    loadWeatherData(city);
})

const setinnterTextById = (id, text) => {
    const tempareture = document.getElementById(id);
    tempareture.innerText = text;
}

loadWeatherData('Brahmanbaria');