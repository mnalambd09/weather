const api_key = `e69f72450ea993ae048899c7f86212ea`;
const loadWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

const displayWeather = (data) => {
    setInnerTextByID('tempareture', data.main.temp);
    // console.log(data.main.temp)
    setInnerTextByID('display-condition', data.weather[0].description);
    setInnerTextByID('display-wind', data.wind.speed);
    setInnerTextByID('display-wind-deg', data.wind.deg);

}

document.getElementById('btn-input').addEventListener('click', function(){
    const inputField = document.getElementById('inputField');
    const city = inputField.value;
    document.getElementById('displayCity').innerText = city;
    loadWeather(city);
})

const setInnerTextByID = (id, text) => {
    const tempareture = document.getElementById(id);
    tempareture.innerText = text;
}
loadWeather('dhaka');