/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {},
        colors: {
            blackLighter: "#272727",
            blackDarker: "#171717",
            white: "#FCFCFC",
            vermilion: "#EF3E36",
            verdigris: "#17BEBB",
            transparent: "transparent",
        },
    },
    plugins: [],
}
