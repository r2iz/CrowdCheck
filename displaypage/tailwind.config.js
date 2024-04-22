/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                body: [
                    "Meiryo",
                ],
                tsukushi: [
                    "Tsukushi A Round Gothic",
                    "sans-serif",
                ],
            },
            colors: {
                "theme-deep-blue": "#002F67",
                "theme-orange": "#DB4D03",
            },
        },
    },
    plugins: [],
};

