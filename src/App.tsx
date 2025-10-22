import { useState } from 'react';
import './App.css';
import { fetchWeatherAndNewsCallbacks } from './callbackVersion';
import { fetchWeatherAndNewsPromises, fetchWeatherAndNewsPromiseChain, fetchWeatherAndNewsPromiseAll, fetchWeatherAndNewsPromiseRace } from './promiseVersion';
import { fetchWeatherAndNewsAsync, fetchWeatherAndNewsSequential, fetchWeatherAndNewsParallel, fetchWeatherAndNewsRace } from './asyncAwaitVersion';

type VersionType = 'callback' | 'promise' | 'promiseChain' | 'promiseAll' | 'promiseRace' | 'async' | 'asyncSequential' | 'asyncParallel' | 'asyncRace';

function App() {
  const [weather, setWeather] = useState<any>(null);
  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [version, setVersion] = useState<VersionType>('callback');
  const [raceResult, setRaceResult] = useState<any>(null);

  const fetchData = async (selectedVersion: VersionType) => {
    setLoading(true);
    setError(null);
    setWeather(null);
    setNews(null);
    setRaceResult(null);
    setVersion(selectedVersion);

    console.log(`\n========== Fetching with ${selectedVersion.toUpperCase()} ==========`);

    try {
      switch (selectedVersion) {
        case 'callback':
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
          break;

        case 'promise':
          const promiseData = await fetchWeatherAndNewsPromises();
          setWeather(promiseData.weather);
          setNews(promiseData.news);
          setLoading(false);
          break;

        case 'promiseChain':
          const chainData = await fetchWeatherAndNewsPromiseChain();
          setWeather(chainData.weather);
          setNews(chainData.news);
          setLoading(false);
          break;

        case 'promiseAll':
          const allData = await fetchWeatherAndNewsPromiseAll();
          setWeather(allData.weather);
          setNews(allData.news);
          setLoading(false);
          break;

        case 'promiseRace':
          const raceData = await fetchWeatherAndNewsPromiseRace();
          setRaceResult(raceData);
          setLoading(false);
          break;

        case 'async':
          const asyncData = await fetchWeatherAndNewsAsync();
          setWeather(asyncData.weather);
          setNews(asyncData.news);
          setLoading(false);
          break;

        case 'asyncSequential':
          const sequentialData = await fetchWeatherAndNewsSequential();
          setWeather(sequentialData.weather);
          setNews(sequentialData.news);
          setLoading(false);
          break;

        case 'asyncParallel':
          const parallelData = await fetchWeatherAndNewsParallel();
          setWeather(parallelData.weather);
          setNews(parallelData.news);
          setLoading(false);
          break;

        case 'asyncRace':
          const asyncRaceData = await fetchWeatherAndNewsRace();
          setRaceResult(asyncRaceData);
          setLoading(false);
          break;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>🌦️ Async Weather & News Dashboard</h1>
      <p className="subtitle">Demonstrating Callbacks, Promises, and Async/Await</p>

      <div className="controls">
        <h3>Select Async Pattern:</h3>
        
        <div className="button-group">
          <h4>📞 Callbacks</h4>
          <button onClick={() => fetchData('callback')} disabled={loading}>
            Callback Version
          </button>
        </div>

        <div className="button-group">
          <h4>🔗 Promises</h4>
          <button onClick={() => fetchData('promiseChain')} disabled={loading}>
            Promise Chain
          </button>
          <button onClick={() => fetchData('promiseAll')} disabled={loading}>
            Promise.all()
          </button>
          <button onClick={() => fetchData('promiseRace')} disabled={loading}>
            Promise.race()
          </button>
        </div>

        <div className="button-group">
          <h4>⚡ Async/Await</h4>
          <button onClick={() => fetchData('asyncSequential')} disabled={loading}>
            Sequential
          </button>
          <button onClick={() => fetchData('asyncParallel')} disabled={loading}>
            Parallel
          </button>
          <button onClick={() => fetchData('asyncRace')} disabled={loading}>
            Race
          </button>
        </div>
      </div>

      <div className="status">
        <p><strong>Current Pattern:</strong> {version}</p>
        {loading && <p className="loading">⏳ Loading...</p>}
        {error && <p className="error">❌ Error: {error}</p>}
      </div>

      {raceResult ? (
        <div className="race-result">
          <h2>🏁 Race Result</h2>
          <p><strong>Winner:</strong> {raceResult.type}</p>
          <pre>{JSON.stringify(raceResult.data, null, 2)}</pre>
        </div>
      ) : (
        <div className="data-container">
          <div className="weather-container">
            <h2>🌡️ Weather</h2>
            {weather ? (
              <div>
                <p><strong>Temperature:</strong> {weather.current_weather.temperature}°C</p>
                <p><strong>Windspeed:</strong> {weather.current_weather.windspeed} km/h</p>
                <p><strong>Wind Direction:</strong> {weather.current_weather.winddirection}°</p>
                <p><strong>Weather Code:</strong> {weather.current_weather.weathercode}</p>
              </div>
            ) : (
              <p className="placeholder">Select a method to fetch weather data</p>
            )}
          </div>

          <div className="news-container">
            <h2>📰 News Headlines</h2>
            {news ? (
              <ul>
                {news.posts.slice(0, 5).map((post: any) => (
                  <li key={post.id}>
                    <strong>{post.title}</strong>
                    <p>{post.body.substring(0, 100)}...</p>
                    <small>👍 {post.reactions.likes} | 👎 {post.reactions.dislikes}</small>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="placeholder">Select a method to fetch news data</p>
            )}
          </div>
        </div>
      )}

      <div className="footer">
        <p>💡 <strong>Tip:</strong> Open your browser console to see detailed logs of each async pattern!</p>
      </div>
    </div>
  );
}

export default App;