

const API_KEY = "f46c03bd7262494d64f2bfc39bceadae";

function onGeoOK(position){

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in",lat,lng);
    console.log(position);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} /${data.main.temp} °C`;
        });
    }

function onGeoError(){
    console.log("Can't find you. No weather for you.");

};

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);