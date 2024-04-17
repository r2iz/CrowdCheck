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
                    'Meiryo',
                ],
                tsukushi: [
                    'Tsukushi A Round Gothic',
                    'sans-serif',
                ],
            },
        },
    },
    plugins: [],
};

