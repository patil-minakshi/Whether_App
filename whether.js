// this is javascript file //

const InputBox = document.querySelector('.inputBox');
const Search_btn = document.getElementById('search_button');
const whether_img = document.querySelector('.whather_image');
const Temprature = document.querySelector('.temprature');
const Discription = document.querySelector('.discription');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind_speed');
const location_not_found = document.querySelector('.location-not-found');
const whether_body = document.querySelector('.whwther-body')

async function cheackWhether(city) {
    const api_key = 'befd1eb5577a6cca14c2fbd6cbab0345';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const whether_response = await fetch(URL)
    const data = await whether_response.json();
    location_not_found.style.display = 'none';
    if (data.cod === '404') {
        location_not_found.style.display = "flex";
        whether_body.style.display = "none";
        return;
    } else{
            whether_body.style.display = "flex";

    }
    

    Temprature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`
    Discription.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity} %`;
    wind_speed.innerHTML = `${data.wind.speed}km/h`;

    switch (data.weather[0].main) {
        case 'Clouds':
            whether_img.src = "ASSEST/cloud.png";
            break;
        case 'Clear':
            whether_img.src = "ASSEST/clear.png";
            break;
        case 'Rain':
            whether_img.src = "ASSEST/rain.png";
            break;
        case 'Mist':
            whether_img.src = "ASSEST/mist.png";
            break;
        case 'Snow':
            whether_img.src = "ASSEST/snow.png";
            break;

    }


}

Search_btn.addEventListener('click', () => {
    cheackWhether(InputBox.value);
});