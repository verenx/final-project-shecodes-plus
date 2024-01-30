function changeCity(event) {
  event.preventDefault();
  let citySearchField = document.querySelector("#city-search-field");

  let city = citySearchField.value;
  let apiKey = "bbb7o8acc1a3c8e9f87003f9494b2cct";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(displayTemp);

  function displayTemp(response) {
    let currentCity = document.querySelector("#current-city-name");
    currentCity.innerHTML = response.data.city;

    let currentTemp = document.querySelector("#current-temp");
    let temperature = Math.round(response.data.temperature.current);
    currentTemp.innerHTML = temperature;
  }
}

let weatherSearch = document.querySelector(".weather-search");
weatherSearch.addEventListener("submit", changeCity);

let currentDate = new Date();
let dayTime = document.querySelector("#current-day-time");
console.log(dayTime);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[currentDate.getDay()];
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}
if (currentHours < 10) {
  currentHours = `0${currentHours}`;
}

dayTime.innerHTML = `${currentDay} ${currentHours}:${currentMinutes}`;
