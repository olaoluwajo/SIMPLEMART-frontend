import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkModeProvider } from './context/DackModeContext.jsx';
import { Provider } from 'react-redux';
import { Suspense } from 'react';
import store from './store/index';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
      <Provider store={store}>
        <Suspense>
          <DarkModeProvider>
            <App />
            <Toaster
              toastOptions={{
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: false,
                // progress: undefined,
                limit: 2,
                style: {
                  background: "#283046",
                  color: "#fff",
                },
              }}
            />
          </DarkModeProvider>
        </Suspense>
      </Provider>
);
