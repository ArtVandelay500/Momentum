// const API_KEY = "fafe46a8448455258c1a9900c2f54169";
const API_KEY = "e26993904220cc0f00c24112a1116c92";


function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        weather.innerText = `${data.weather[0].main}/${data.name}  ${data.main.temp}º`;


    });  
    }
function onGeoError(){
    alert("Where are you? Can't find you...");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);