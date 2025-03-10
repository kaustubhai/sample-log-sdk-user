import './App.css';
import chronolog from '@farmart-engineering/chronolog';

// setting up the chronolog
chronolog.setup({
  production: true,
  autoOpenSearch: true,
  index: "farmartapp",
  console: true,
})

// sample api call object
const apiObj = {
  apiMethod: "GET",
  apiHeaders: {
      "Content-Type": "application/json",
  },
  apiHost: "https://api.example.com",
  apiResponseCode: 200,
  apiResponseMessage: "Success",
  meta: {
      timeTaken: 23,
  },
  userId: "1234567890",
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => chronolog.log('From react')}>Normal Log</button>
        <button onClick={() => chronolog.error(new Error('From react'))}>Error Log</button>
        <button onClick={() => chronolog.event_track({
          message: "This-is-an-event-message",
          severityLevel: "EVE",
        })}>Event log</button>
        <button onClick={() => 
          chronolog.log("API called successfully", apiObj)
        }>API Log</button>
      </header>
    </div>
  );
}

export default App;
