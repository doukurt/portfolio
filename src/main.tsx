import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom"
import router from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div
            className="h-screen text-gray-500 dark:text-text-primary  transition-colors bg-light-theme dark:bg-dark-theme">
            <RouterProvider router={router} />
        </div>
    </React.StrictMode>,
)
