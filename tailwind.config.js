/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        colors: {
            yellow: "#FFDC02",
            red: "#FF3032",
            black: "#000000",
            "light-blue": "#70CDDE",
            green: "#B6DEA2",
            purple: "#7189FF",
            white: "#FFFFFF",
            primary: {
                50: "#fff1f1",
                100: "#ffdfdf",
                200: "#ffc5c6",
                300: "#ff9d9e",
                400: "#ff6465",
                500: "#ff3032",
                600: "#ed1517",
                700: "#c80d0f",
                800: "#a50f10",
                900: "#881415",
                950: "#4b0405",
            },
            secondary: {
                50: "#fefde8",
                100: "#fffec2",
                200: "#fffa87",
                300: "#ffef43",
                400: "#ffdc02",
                500: "#efc503",
                600: "#ce9900",
                700: "#a46d04",
                800: "#88550b",
                900: "#734510",
                950: "#432405",
            },
        },
        extend: {
            keyframes: {
                rotate: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
            },
            animation: {
                rotate: "rotate 10s linear infinite",
            },
            backgroundImage: {
                "shapes-pattern": "url('/assets/shapes/Shapes.png')",
                "shapes-pattern-rotate":
                    "url('/assets/shapes/bg-shapes-rotate.png')",
            },
            boxShadow: {
                neobrutalism: "5px 5px 0px 0px rgba(0, 0, 0, 1);",
            },
        },
    },
    plugins: [],
};
