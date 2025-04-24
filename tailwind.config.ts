import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
const config = {
    theme: {
        extend: {
            colors: {
                brand: 'rgb(242 113 7)',
                muted: colors.slate[200],
                'muted-text': colors.slate[400],
                ...colors,
            },
            fontFamily: {
                sans: ['Inter', 'Arial', 'sans-serif'],
            },
        },
    },
};

export default config;
