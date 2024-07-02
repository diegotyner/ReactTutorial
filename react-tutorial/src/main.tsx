import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'

// React is a library - tool that provides functionality (hammer). React is good for UI. 
// Angular is a framework - set of tools and guidelines for building apps (toolbox)


// Strict Mode - Identify potential problems. Default.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// React Native could be used to render in mobile
