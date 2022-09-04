 const api_key =  `18d5a3e260f5aa61562ce71dd09da722`;
const loadWeather = (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

const displayWeather = (data) => {
    // const displayWeather = document.getElementById('tempareture');
    // displayWeather.innerText = data.main.temp;
    setInnerTextByID('tempareture', data.main.temp);
    setInnerTextByID('display-condition', data.weather[0].description);
    setInnerTextByID('display-wind', data.wind.speed);
    setInnerTextByID('display-wind-deg', data.wind.deg);

    console.log(data);
} 

document.getElementById('btn-input').addEventListener('click', function(){
    const takeValue = document.getElementById('inputField');
    const city = takeValue.value;
    document.getElementById('displayCity').innerText = city;
    loadWeather(city)
})

const setInnerTextByID = (id, text) => {
    const displayWeather = document.getElementById(id);
    displayWeather.innerText = text;
}


loadWeather('brahmanbaria')