// le prefix tailwind marche correctement
tailwind.config = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '8xl': '96rem',
                '9xl': '128rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            colors: {
                'blue': '#2046f2',
                'purple': '#7e5bef',
                'pink': '#ff49db',
                'orange': '#ff7849',
                'green': '#13ce66',
                'yellow': '#ffc82c',
                'gray-dark': '#616161',
                'gray': '#9e9e9e',
                'gray-light': '#f9f9f9',
            },
        }
    },
}