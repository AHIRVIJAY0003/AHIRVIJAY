import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from'./components/app'
import "animate.css"
import './assets/css/style.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
