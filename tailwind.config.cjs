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
            grey: "#7c7c7c",
            white: "#FCFCFC",
            vermilion: "#EF3E36",
            transparent: "transparent",
        },
        fontFamily: {
            title: ["Quattrocento", "serif"],
            text: ["Lora", "serif"],
        },
    },
    plugins: [],
}
