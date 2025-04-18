# 🌤️ How This Weather App Works

This weather website allows users to search any city and view its current weather conditions along with a 3-day forecast.

## 🔧 How It Works

1. **User Inputs a City**
   - The user types a city name and clicks the **Get Weather** button.

2. **API Request**
   - The app sends a request to [WeatherAPI.com](https://www.weatherapi.com/) using the `/forecast.json` endpoint.
   - The request includes:
     - The city name (`q`)
     - The number of forecast days (`days=3`)
     - Your personal API key (`key=...`)

3. **API Response**
   - WeatherAPI returns:
     - Current temperature, humidity, wind speed, and condition description
     - A forecast array with data for the next 3 days

4. **Displaying Weather Data**
   - JavaScript updates the weather card with:
     - City name
     - Current weather info
     - Emoji icon based on the condition description (e.g., ☀️, 🌧️, ❄️)

5. **Tabbed Forecast**
   - Below the current weather, 3 tabs show the next 3 days.
   - Clicking a tab reveals that day’s:
     - Min/Max temperature
     - Condition description
     - Humidity and chance of rain
     - Emoji icon for the condition

## 📦 Technologies Used

- **HTML** – structure
- **CSS** – styling and layout
- **JavaScript** – functionality, API calls, DOM manipulation
- **WeatherAPI.com** – live weather data

## 🛠️ Requirements

- A free API key from [WeatherAPI.com](https://www.weatherapi.com/)
- Modern browser (desktop or mobile)

## 📎 Setup Instructions

1. Replace the placeholder API key in `main.js` with your actual WeatherAPI key.
2. Open `index.html` in your browser.
3. Search for any city and view the weather instantly.

---

