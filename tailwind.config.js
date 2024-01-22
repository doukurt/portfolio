/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-theme': '#011627',
                'light-theme': '#ffffff',
                "text-primary": "#607B96",
                "divider-primary": "#1E2D3D",
                "off-white": "#E5E9F0",
                "new-purple": "#4D5BCE"
            },
        },
    },
    plugins: [],
}

