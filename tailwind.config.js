/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "InterVariable",
                    {
                        fontFeatureSettings: '"zero"',
                    },
                    "sans serif",
                ],
            },

            animation: {
                fade: "fadeIn 0.5s ease-in-out",
                sfade: "fadeIn 0.9s ease-in-out",
            },

            keyframes: {
                fadeIn: {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
            },
        },
    },
    plugins: [],
};