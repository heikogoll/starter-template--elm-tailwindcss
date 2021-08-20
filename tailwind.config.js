module.exports = {
    purge: {
        enabled: true,
        content: [
            './src/**/*.elm',
            './public/**/*.html'
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'elm-logo': "url('./assets/img/logo.svg')"
            })
        },
    },
    variants: {
        extend: {
            backgroundImage: ['hover', 'focus']
        },
    },
    plugins: [],
}
