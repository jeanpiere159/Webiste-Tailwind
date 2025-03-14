/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'text-sub': '#565656',
                'text-sub-2': '#757575',
            },
            boxShadow: {
                'shadow': '0px 10px 50px rgba(0, 0, 0, 5%)',

            },
            borderRadius: {
                20: '20px',
                70: '70px',
            }
        },
    },
    plugins: [],
}