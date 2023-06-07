/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            dropShadow: {
                'text': '-2px -4px 0px rgba(228,53,53,1);',

            }
        },
    },
    plugins: [],
}