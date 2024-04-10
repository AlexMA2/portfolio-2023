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
            primary: "#FFF2E8",
            white: "#FFFFFF",
        },
        textColor: {
            primary: "#000000",
            secondary: "#666666",
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
            },
            boxShadow: {
                neobrutalism: "5px 5px 0px 0px rgba(0, 0, 0, 1);",
            },
        },
    },
    plugins: [],
};
