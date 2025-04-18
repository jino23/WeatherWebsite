
window.addEventListener("DOMContentLoaded", () => {
    const apiKey = "e8be6f5838754ed1b41223843251504"; 
  
    const searchBtn = document.getElementById("search-btn");
    const forecastTabs = document.getElementById("forecast-tabs");
    const forecastDetails = document.getElementById("forecast-details");
  
    function getWeatherEmoji(description) {
      const desc = description.toLowerCase();
      if (desc.includes("sun")) return "☀️";
      if (desc.includes("cloud")) return "☁️";
      if (desc.includes("rain")) return "🌧️";
      if (desc.includes("snow")) return "❄️";
      if (desc.includes("thunder")) return "⛈️";
      return "🌡️";
    }
  
    searchBtn.addEventListener("click", () => {
      const city = document.getElementById("city-input").value.trim();
      if (!city) {
        alert("Please enter a city name.");
        return;
      }
  
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`)
        .then(res => res.json())
        .then(data => {
          const current = data.current;
          const location = data.location;
          const forecast = data.forecast.forecastday;
  
          document.getElementById("weather-card").classList.remove("hidden");
          document.getElementById("city-name").textContent = location.name;
          document.getElementById("temp").textContent = `Temperature: ${current.temp_c}°C`;
          document.getElementById("description").textContent = `Description: ${current.condition.text} ${getWeatherEmoji(current.condition.text)}`;
          document.getElementById("humidity").textContent = `Humidity: ${current.humidity}%`;
          document.getElementById("wind").textContent = `Wind Speed: ${current.wind_kph} km/h`;
  
          // Setup forecast tabs
          forecastTabs.innerHTML = "";
          forecastDetails.innerHTML = "";
          forecastTabs.classList.remove("hidden");
          forecastDetails.classList.remove("hidden");
  
          forecast.forEach((day, index) => {
            const tab = document.createElement("button");
            tab.className = "forecast-tab";
            tab.textContent = new Date(day.date).toLocaleDateString("en-US", {
              weekday: "short", month: "short", day: "numeric"
            });
  
            tab.addEventListener("click", () => {
              document.querySelectorAll(".forecast-tab").forEach(t => t.classList.remove("active"));
              tab.classList.add("active");
  
              forecastDetails.innerHTML = `
                <strong>${day.date}</strong>
                <p>${day.day.condition.text} ${getWeatherEmoji(day.day.condition.text)}</p>
                <p>Min Temp: ${day.day.mintemp_c}°C</p>
                <p>Max Temp: ${day.day.maxtemp_c}°C</p>
                <p>Humidity: ${day.day.avghumidity}%</p>
                <p>Chance of Rain: ${day.day.daily_chance_of_rain}%</p>
              `;
            });
  
            forecastTabs.appendChild(tab);
            if (index === 0) tab.click(); 
          });
        })
        .catch(err => {
          console.error("WeatherAPI error:", err);
          alert("Could not get weather.");
        });
    });
  });
  