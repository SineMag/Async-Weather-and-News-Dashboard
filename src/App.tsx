import { useState, useEffect } from 'react';
import './App.css';
import { fetchWeatherAndNewsCallbacks } from './callbackVersion';

function App() {
  const [weather, setWeather] = useState<any>(null);
  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWeatherAndNewsCallbacks((err, data) => {
      if (err) {
        setError(err.message);
        setLoading(false);
        return;
      }
      if (data) {
        setWeather(data.weather);
        setNews(data.news);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <h1>Asynchronous Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="data-container">
        <div className="weather-container">
          <h2>Weather</h2>
          {weather && (
            <div>
              <p>Temperature: {weather.current_weather.temperature}°C</p>
              <p>Windspeed: {weather.current_weather.windspeed} km/h</p>
            </div>
          )}
        </div>
        <div className="news-container">
          <h2>News</h2>
          {news && (
            <ul>
              {news.posts.slice(0, 5).map((post: any) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;