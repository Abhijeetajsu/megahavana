document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '9e881205acmshc40830a315dcb9fp1b8245jsnce2a62178afc'; // Replace with your actual API key
    const airQualityApiKey = 'your_air_quality_api_key';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': / 'bed0d8ec53msh81840c2ee0d4d41p1e02dcjsn8fa47884a178',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    const airQualityOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': / '9e881205acmshc40830a315dcb9fp1b8245jsnce2a62178afc',
            'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };
    const cityName = document.getElementById('cityName');
    const cloudPct = document.getElementById('cloud_pct');
    const temp = document.getElementById('temp');
    const feelsLike = document.getElementById('feels_like');
    const humidity = document.getElementById('humidity');
    // Add other DOM elements as needed
    const minTemp = document.getElementById('min_temp');
    const maxTemp = document.getElementById('max_temp');
    const windSpeed = document.getElementById('wind_speed');
    const windDegrees = document.getElementById('wind_degrees');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    const coConcentration = document.getElementById('co_concentration');
    const coAqi = document.getElementById('co_aqi');
    // Additional DOM elements for air quality parameters
    const no2Concentration = document.getElementById('no2_concentration');
    const no2Aqi = document.getElementById('no2_aqi');
    const o3Concentration = document.getElementById('o3_concentration');
    const o3Aqi = document.getElementById('o3_aqi');
    const pm25Concentration = document.getElementById('pm25_concentration');
    const pm25Aqi = document.getElementById('pm25_aqi');
    const pm10Concentration = document.getElementById('pm10_concentration');
    const pm10Aqi = document.getElementById('pm10_aqi');
    const so2Concentration = document.getElementById('so2_concentration');
    const so2Aqi = document.getElementById('so2_aqi');
    const overallAqi = document.getElementById('overall_aqi');
    const getWeather = (city) => {
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                cityName.innerHTML = city;
                cloudPct.innerHTML = response.cloud_pct;
                temp.innerHTML = response.temp;
                temp2.innerHTML = response.temp;
                feelsLike.innerHTML = response.feels_like;
                humidity.innerHTML = response.humidity;
                humidity2.innerHTML = response.humidity;
                minTemp.innerHTML = response.min_temp;
                maxTemp.innerHTML = response.max_temp;
                windSpeed.innerHTML = response.wind_speed;
                windSpeed2.innerHTML = response.wind_speed;
                windDegrees.innerHTML = response.wind_degrees;
                sunrise.innerHTML = response.sunrise;
                sunset.innerHTML = response.sunset;
            })
            .catch(err => console.error(err));
    };
   const getAirQuality = (city) => {
        fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`, airQualityOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((response) => {
                console.log(response);
coConcentration.innerHTML = response.CO ? response.CO.concentration : 'N/A';
                coAqi.innerHTML = response.CO ? response.CO.aqi : 'N/A';
// Update other air quality parameters in a similar manner
                no2Concentration.innerHTML = response.NO2 ? response.NO2.concentration : 'N/A';
                no2Aqi.innerHTML = response.NO2 ? response.NO2.aqi : 'N/A';
o3Concentration.innerHTML = response.O3 ? response.O3.concentration : 'N/A';
                o3Aqi.innerHTML = response.O3 ? response.O3.aqi : 'N/A';
pm25Concentration.innerHTML = response['PM2.5'] ? response['PM2.5'].concentration : 'N/A';
                pm25Aqi.innerHTML = response['PM2.5'] ? response['PM2.5'].aqi : 'N/A';
pm10Concentration.innerHTML = response.PM10 ? response.PM10.concentration : 'N/A';
                pm10Aqi.innerHTML = response.PM10 ? response.PM10.aqi : 'N/A';
 so2Concentration.innerHTML = response.SO2 ? response.SO2.concentration : 'N/A';
                so2Aqi.innerHTML = response.SO2 ? response.SO2.aqi : 'N/A';
overallAqi.innerHTML = response.overall_aqi ? response.overall_aqi : 'N/A';
            })
            .catch(err => console.error(err));
    };
const submit = document.getElementById('submit');
    const cityInput = document.getElementById('city');
submit.addEventListener("click", (e) => {
        e.preventDefault();
        const cityValue = cityInput.value.trim();
        if (cityValue !== "") {
            getWeather(cityValue);
            getAirQuality(cityValue);
        }
    });
// Initial data load
    getWeather("Jhansi");
    getAirQuality("Jhansi");
});
