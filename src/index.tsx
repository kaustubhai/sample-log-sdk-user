import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import chronolog from '@farmart-engineering/chronolog';
import { createRoutesFromChildren } from 'react-router-dom';
import { useNavigationType } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { matchRoutes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
chronolog.initialize({
  production: true,
  autoOpenSearch: true,
  index: "farmartapp",
  console: true,
  environment: "staging",
  version: "0.2.0",
  deviceType: "web",
  origin: "Sample-Client",
  sentry: {
    dsn: '<DSN>>',
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
    appId: "<APP_ID>",
    debugMode: 1,
    moeDataCenter: "dc_3"
  }
})
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
