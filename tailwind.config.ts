import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
const config = {
    theme: {
        extend: {
            colors: {
                brand: 'hsl(27 94% 49%)',
                muted: colors.slate[200],
                'muted-text': colors.slate[400],
                ...colors,
            },
            fontFamily: {
                sans: ['Inter', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;
