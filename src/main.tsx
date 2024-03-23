import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Loading from './ui/Loading';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>,
);
