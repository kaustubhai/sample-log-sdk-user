import './App.css';
import { useEffect } from 'react';
import chronolog from '@farmart-engineering/chronolog';
import { useLocation, useNavigationType } from 'react-router-dom';
import { createRoutesFromChildren, matchRoutes } from 'react-router-dom';
// setting up the chronolog
chronolog.setup({
  production: true,
  autoOpenSearch: true,
  index: "farmartapp",
  console: true,
  environment: "staging",
  version: "0.2.0",
  deviceType: "web",
  origin: "Sample-Client",
  sentry: {
      dsn: '<DSN>',
      environment: "development",
      tracesSampleRate: 0.01,
      replaysSessionSampleRate: 0.01,
      replaysOnErrorSampleRate: 0.01,
    reactRouter: {
      useEffect: useEffect,
      useLocation: useLocation,
      useNavigationType: useNavigationType,
      createRoutesFromChildren: createRoutesFromChildren,
      matchRoutes: matchRoutes,
    }
  },
  moengage: {
    appId: "<APP-ID>",
    appKey: "<APP-KEY>",
  }
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

function handleClick() {
  // chronolog.error(new Error("Error from react"))
  throw new Error("Error from react boundary 3")
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => chronolog.log('From react')}>Normal Log</button>
        <button onClick={handleClick}>Error Log</button>
        <button onClick={() => chronolog.event_track({
          message: "This-is-an-event-message",
          userId: "1234567890",
          appId: "CS2M99BHDFVE4TH87HIUXKP4"
        })}>Event log</button>
        <button onClick={() =>
          chronolog.log("API called successfully", apiObj)
        }>API Log</button>
      </header>
    </div>
  );
}

export default App;
