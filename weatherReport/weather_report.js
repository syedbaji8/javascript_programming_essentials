const apiKey = '57f99d0e602b03aa136057c13262f127';

const weatherForm = document.getElementById('weatherForm');
const weatherInfo = document.getElementById('weatherInfo');

async function fetchWeatherFromApi(city) {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, { method: 'GET' });
    const data = await result.json();
    return data;
}
function showweatherDetails(event) {
    event.preventDefault();
    const userCityInputValue = document.getElementById('city');
    try{
        if(!userCityInputValue.value){
            throw new Error('Please fill the input with proper city name')
        }
        if(userCityInputValue.value === ''){
            throw new Error('Please fill the input with proper city name')
        }
        fetchWeatherFromApi(userCityInputValue.value)
        .then((data) => {
            console.log(data);
            const renderHtml = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main?.temp}</p>
            <p>Temperature: ${data.weather?.[0]?.description || 'N/A'}</p>`
            weatherInfo.innerHTML = renderHtml;
        })
    }catch(error){
        console.error(error)
    }
}
weatherForm.addEventListener('submit', showweatherDetails);