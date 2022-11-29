
const API_KEY="1a7612315c0449120d1948c1485569f0"

const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        weather.innerText =  `${data.main.temp} / ${data.weather[0].main}`;
        city.innerText = data.name;
    });

};
const onGeoError = () => {
    alert("Can't find you. No weather for you.");
};


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);