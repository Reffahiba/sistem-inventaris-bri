/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#01529D',
                secondary: '#F46F23',
            },
        },
    },
    plugins: [],
};

