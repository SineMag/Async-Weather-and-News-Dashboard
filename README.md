# 🌦️ Async Weather & News Dashboard

A comprehensive educational project demonstrating different asynchronous programming patterns in JavaScript/TypeScript. This dashboard fetches weather data and news headlines using three different async approaches: **Callbacks**, **Promises**, and **Async/Await**.

---

## 📋 Assessment Details

**Project:** Async Weather & News Dashboard  
**Due Date:** 05 September 2026 - 4pm  
**Purpose:** Demonstrate understanding of asynchronous programming and the event loop

### Assessment Requirements

This project fulfills the following requirements:

#### Core Features ✅
- Fetch weather data from Open-Meteo API
- Fetch news headlines from DummyJSON Posts API
- Implement three asynchronous patterns:
  - **Callbacks** - Traditional callback-based approach
  - **Promises** - Modern promise-based approach with chaining
  - **Async/Await** - Latest ES8 async/await syntax
- Demonstrate Promise.all() for simultaneous requests
- Demonstrate Promise.race() for fastest response
- Consistent error handling across all versions

#### Technical Requirements ✅
- Node.js + TypeScript setup
- Separate files for each implementation pattern
- Proper folder structure (src/ with version files)
- Callback hell demonstration through nested calls
- Try-catch error handling in async/await
- Console logging for educational purposes

---

## 🚀 How to Run This Project

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A modern web browser (Chrome, Firefox, Edge)
- Internet connection (for API calls)

### Installation Steps

```bash
# 1. Navigate to project directory
cd Async-Weather-and-News-Dashboard

# 2. Install dependencies
npm install
```

### Running the Application

```bash
# Start development server
npm run dev
```

**The application will be available at:** `http://localhost:5173`

### Testing Different Patterns

Once the app is running:

1. **Open your browser** to `http://localhost:5173`
2. **Open Developer Tools** - Press `F12` (Windows) or `Cmd+Option+I` (Mac)
3. **Click the Console tab** to see detailed logs
4. **Click each button** to test different async patterns:
   - Callback Version
   - Promise Chain
   - Promise.all()
   - Promise.race()
   - Sequential (Async/Await)
   - Parallel (Async/Await)
   - Race (Async/Await)

### Stopping the Server

Press `Ctrl+C` in the terminal to stop the development server.

### Alternative npm Commands

```bash
npm run callback   # Starts dev server (alias)
npm run promise    # Starts dev server (alias)
npm run async      # Starts dev server (alias)
npm test          # Starts dev server (alias)
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## 📋 Project Overview

This project showcases:
- ✅ Callback-based asynchronous programming (demonstrating callback hell)
- ✅ Promise-based programming with chaining
- ✅ Promise.all() for parallel execution
- ✅ Promise.race() for competitive execution
- ✅ Async/Await with try-catch error handling
- ✅ Sequential vs Parallel data fetching
- ✅ Modern React UI with TypeScript

## 📁 Project Structure

```
src/
├── callbackVersion.ts       # Callback-based implementation
├── promiseVersion.ts        # Promise-based implementation
├── asyncAwaitVersion.ts     # Async/Await implementation
├── App.tsx                  # Main React component with UI
├── App.css                  # Styling
└── main.tsx                 # Entry point
```

## 🎯 Core Features

### 1. Callback Version (`callbackVersion.ts`)
Demonstrates traditional callback-based async programming with nested callbacks (callback hell).

**Key Concepts:**
- Error-first callbacks
- Nested asynchronous operations
- Manual error propagation

**Example:**
```typescript
fetchWeatherAndNewsCallbacks((err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Data:', data);
});
```

### 2. Promise Version (`promiseVersion.ts`)
Shows modern promise-based approaches with chaining, Promise.all(), and Promise.race().

**Key Concepts:**
- Promise chaining
- Parallel execution with Promise.all()
- Competitive execution with Promise.race()
- .then() and .catch() error handling

**Example:**
```typescript
// Promise Chain
fetchWeatherAndNewsPromiseChain()
    .then(data => console.log(data))
    .catch(err => console.error(err));

// Promise.all() - runs both requests simultaneously
fetchWeatherAndNewsPromiseAll()
    .then(data => console.log(data));

// Promise.race() - returns the fastest response
fetchWeatherAndNewsPromiseRace()
    .then(result => console.log('Winner:', result.type));
```

### 3. Async/Await Version (`asyncAwaitVersion.ts`)
Demonstrates modern async/await syntax with comprehensive error handling.

**Key Concepts:**
- async/await syntax
- try-catch-finally error handling
- Sequential vs Parallel execution
- Clean, readable code structure

**Example:**
```typescript
// Sequential
async function fetchSequential() {
    try {
        const weather = await fetchData(WEATHER_URL);
        const news = await fetchData(NEWS_URL);
        return { weather, news };
    } catch (error) {
        console.error('Error:', error);
    }
}

// Parallel
async function fetchParallel() {
    const [weather, news] = await Promise.all([
        fetchData(WEATHER_URL),
        fetchData(NEWS_URL)
    ]);
    return { weather, news };
}
```

## 🔌 APIs Used

### Weather API
- **Provider:** Open-Meteo
- **Endpoint:** `https://api.open-meteo.com/v1/forecast`
- **Parameters:** latitude=52.52, longitude=13.41 (Berlin)
- **Returns:** Current weather data including temperature, windspeed, etc.

### News API
- **Provider:** DummyJSON
- **Endpoint:** `https://dummyjson.com/posts`
- **Returns:** Collection of dummy posts/news articles

## 🧪 Testing Different Patterns

### Using the UI
1. Start the development server: `npm run dev`
2. Open the browser to `http://localhost:5173`
3. Click any button to test different async patterns
4. Open Browser DevTools Console (F12) to see detailed logs

### Patterns Available in UI

**Callbacks:**
- Callback Version - Traditional nested callbacks

**Promises:**
- Promise Chain - Sequential promise chaining
- Promise.all() - Parallel execution
- Promise.race() - Competitive execution

**Async/Await:**
- Sequential - One after another
- Parallel - Using Promise.all() with await
- Race - Using Promise.race() with await

## 📊 Sample Console Outputs

### Callback Version Output
```
========== Fetching with CALLBACK ==========
```

### Promise.all() Output
```
========== Fetching with PROMISEALL ==========
Starting Promise.all() - fetching weather and news simultaneously...
All data fetched with Promise.all()
Weather: {latitude: 52.52, ...}
News: {posts: [...], total: 251, ...}
```

### Promise.race() Output
```
========== Fetching with PROMISERACE ==========
Starting Promise.race() - getting fastest response...
First response received (Promise.race()): news
Data: {posts: [...], total: 251, ...}
```

### Async/Await Parallel Output
```
========== Fetching with ASYNCPARALLEL ==========
Fetching weather and news data in parallel (Async/Await + Promise.all)...
All data fetched successfully
Weather: {latitude: 52.52, ...}
News: {posts: [...], total: 251, ...}
```

## 🎓 Learning Outcomes

After completing this project, you will understand:

1. **Event Loop & Asynchronous Programming**
   - How JavaScript handles async operations
   - The difference between blocking and non-blocking code
   - Event loop mechanics

2. **Callback Pattern**
   - Traditional async programming
   - Callback hell problem
   - Error-first callback convention

3. **Promises**
   - Promise states (pending, fulfilled, rejected)
   - Promise chaining
   - Parallel execution with Promise.all()
   - Race conditions with Promise.race()
   - Error propagation

4. **Async/Await**
   - Syntactic sugar over Promises
   - try-catch error handling
   - Sequential vs Parallel patterns
   - Writing clean async code

5. **Performance Considerations**
   - Sequential vs Parallel execution timing
   - When to use Promise.all() vs sequential await
   - Network request optimization

## 🛠️ Technologies Used

- **React 19** - UI framework
- **TypeScript 5.9** - Type safety
- **Vite 7** - Build tool
- **ESLint** - Code linting
- **Open-Meteo API** - Weather data
- **DummyJSON API** - News/posts data

## 📝 Sprint Breakdown

### ✅ Sprint 1: Project Setup
- Node.js + TypeScript configuration
- Vite + React setup
- Folder structure created

### ✅ Sprint 2: Callback Version
- `callbackVersion.ts` implemented
- Callback hell demonstrated
- Error handling with error-first callbacks

### ✅ Sprint 3: Promise Version
- `promiseVersion.ts` implemented
- Promise chaining
- Promise.all() and Promise.race() examples

### ✅ Sprint 4: Async/Await Version
- `asyncAwaitVersion.ts` implemented
- Sequential and parallel patterns
- try-catch-finally error handling

### ✅ Sprint 5: Error Handling & Response Consistency
- Consistent error handling across all versions
- User-friendly error messages
- Console logging for debugging

### ✅ Sprint 6: Testing & Documentation
- Interactive UI for testing all patterns
- Comprehensive README documentation
- Sample outputs and usage instructions

## 🎨 UI Features

- **Natural white and sky-blue color scheme** with clean, modern design
- **Glassmorphism effects** with subtle transparency and blur
- **Responsive layout** that works on all screen sizes
- **7 interactive buttons** to switch between different async patterns
- **Real-time loading states** with visual feedback
- **Error display** with clear messaging
- **Console logging** for educational purposes and debugging
- **Race result display** for Promise.race() and async race patterns
- **Smooth hover animations** for better user interaction

## 🔍 Key Differences Between Patterns

| Feature | Callbacks | Promises | Async/Await |
|---------|-----------|----------|-------------|
| Syntax | Nested functions | .then() chains | Linear, synchronous-looking |
| Error Handling | Error-first callback | .catch() | try-catch |
| Readability | Poor (callback hell) | Good | Excellent |
| Debugging | Difficult | Moderate | Easy |
| Parallel Execution | Complex | Promise.all() | await Promise.all() |

## 🚦 Best Practices Demonstrated

1. **Error Handling**: All async operations include proper error handling
2. **Type Safety**: TypeScript types for all functions and data
3. **Logging**: Console logs for educational purposes
4. **Clean Code**: Separation of concerns with different files
5. **User Experience**: Loading states and error messages
6. **Performance**: Parallel execution where appropriate

## 🆘 Troubleshooting

### Issue: npm install fails
**Solution:**
```bash
# Check Node.js version (should be v18+)
node --version

# Clear npm cache
npm cache clean --force

# Try installing again
npm install
```

### Issue: Port 5173 is already in use
**Solution:**
```bash
# Use a different port
npm run dev -- --port 3000
```

### Issue: No data displays
**Solution:**
1. Check your internet connection
2. Open browser console (F12) to see any errors
3. Verify the APIs are accessible:
   - Weather: https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
   - News: https://dummyjson.com/posts

### Issue: TypeScript errors
**Solution:**
```bash
# Rebuild the project
npm run build
```

## 📚 Additional Resources

- [MDN - Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [JavaScript.info - Promises](https://javascript.info/promise-basics)
- [JavaScript.info - Async/Await](https://javascript.info/async-await)
- [Event Loop Visualization](http://latentflip.com/loupe/)

## 👨‍💻 Author

Created as part of CodeTribe 2025 coursework

## 📅 Due Date

05 September 2026 - 4pm

## 📄 License

This project is for educational purposes.

---

**Happy Learning! 🎉**