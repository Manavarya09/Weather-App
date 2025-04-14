const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        resultDiv.innerHTML = \`
          <h2>\${data.name}, \${data.sys.country}</h2>
          <p>Temperature: \${data.main.temp} °C</p>
          <p>Weather: \${data.weather[0].description}</p>
        \`;
      } else {
        resultDiv.innerHTML = "City not found.";
      }
    })
    .catch(() => {
      resultDiv.innerHTML = "Error fetching weather data.";
    });
}