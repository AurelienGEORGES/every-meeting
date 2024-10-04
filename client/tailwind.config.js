/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'nav': '#126199',
                'apple': '#2F9B08',
                'sun': '#03781c',
                'king': '#951471',
                'appleModify': '#1CA324' 
            }
        },
    },
    plugins: [],
}


