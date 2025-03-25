import './App.css';
// import { useEffect } from 'react';
import chronolog from '@farmart-engineering/chronolog';
// import { useLocation, useNavigationType } from 'react-router-dom';
// import { createRoutesFromChildren, matchRoutes } from 'react-router-dom';

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

function handleClick() {
  // chronolog.error(new Error("Error from react"))
  throw new Error("Error from react boundary 3")
}
function App() {
    // setting up the chronolog
    console.log('first')
    
  console.log('second')
  return (
    // <chronolog.ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <button onClick={() => chronolog.log('From react')}>Normal Log</button>
          <button onClick={handleClick}>Error Log</button>
          <button onClick={() => chronolog.event_track({
            message: "This-is-an-event-message",
            userId: "7007992740",
            appId: "K09VN3BYYO3G1HNLGR8G5F5M"
          })}>Event log</button>
          <button onClick={() =>
            chronolog.log("API called successfully", apiObj)
          }>API Log</button>
        </header>
      </div>
    // </chronolog.ErrorBoundary>
  );
}

export default App;
