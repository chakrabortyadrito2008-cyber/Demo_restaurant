import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Silence benign HMR websocket errors that are expected in the AI Studio preview environment.
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const message = event.reason?.message || String(event.reason);
    if (message.includes('WebSocket') || message.includes('vite')) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  });

  // Also silence the error console for these specific messages if they bubble
  const originalError = console.error;
  console.error = (...args) => {
    const msg = args[0];
    if (typeof msg === 'string' && (msg.includes('WebSocket') || msg.includes('vite'))) {
      return;
    }
    originalError.apply(console, args);
  };
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
