const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

const theme = process.env.WP_DEFAULT_THEME;

module.exports = {
    mode: "jit",
    darkMode: "class", // or 'false' or 'class'
    // prefix: "ada-",
    corePlugins: {
      preflight: false,
    },
		content: [
            `./public/themes/${theme}/index.php`,
            `./public/themes/${theme}/header.php`,
            `./public/themes/${theme}/footer.php`,
            `./public/themes/${theme}/404.php`,
            `./public/themes/${theme}/page.php`,
            `./public/themes/${theme}/template-parts/**/*.php`,
            `./public/themes/${theme}/inc/*.php`,
            `./public/themes/${theme}/single.php`,
            `./public/themes/${theme}/archive.php`,
            `./public/themes/${theme}/comments.php`,
            `./resources/**/*.js`,
            `./resources/js/*.js`,
            `./public/themes/${theme}/assets/js/*.js`,
            `./resources/sass/*.scss`,
            `./public/themes/${theme}/safelist.txt`,
						`./public/plugins/ada-blocks/src/**/*.php`,
						`./public/plugins/ada-blocks/src/**/*.js`,
						`./public/plugins/ada-blocks/src/**/*.scss`,
    ],
		safelist: [
			"hidden",
			"bg-white",
			"border",
			"rounded",
			"rounded-2xl",
			"drop-shadow-lg",
			"drop-shadow-xl",
			"drop-shadow-2xl",
			"snap-y",
			"snap-mandatory",
			"snap-start",
			"p-4",
			"my-4",
			"pt-16",
			"h-120",
			"min-h-120",
			"-mt-28",
			"-z-10",
			"z-10"
		],
    // purge: {
    //     mode: "layers",
    //     content: [
    //         `./public/themes/${theme}/index.php`,
    //         `./public/themes/${theme}/header.php`,
    //         `./public/themes/${theme}/footer.php`,
    //         `./public/themes/${theme}/404.php`,
    //         `./public/themes/${theme}/page.php`,
    //         `./public/themes/${theme}/template-parts/**/*.php`,
    //         `./public/themes/${theme}/inc/*.php`,
    //         `./public/themes/${theme}/single.php`,
    //         `./public/themes/${theme}/archive.php`,
    //         `./public/themes/${theme}/comments.php`,
    //         `./resources/**/*.js`,
    //         `./resources/js/*.js`,
    //         `./public/themes/${theme}/assets/js/*.js`,
    //         `./resources/sass/*.scss`,
    //         `./public/themes/${theme}/safelist.txt`,
		// 				`./public/plugins/ada-blocks/src/**/*.php`,
		// 				`./public/plugins/ada-blocks/src/**/*.js`,
		// 				`./public/plugins/ada-blocks/src/**/*.scss`,
    //     ],
    //     // These options are passed through directly to PurgeCSS
    //     options: {
    //         fontFace: true,
    //         safelist: [
    //             "hidden",
    //             "bg-white",
    //             "border",
    //             "rounded",
		// 						"rounded-2xl",
    //             "drop-shadow-lg",
    //             "drop-shadow-xl",
		// 						"drop-shadow-2xl",
    //             "p-4",
		// 						"my-4",
		// 						"pt-16",
    //             "h-120",
    //             "min-h-120",
    //             "-mt-28",
		// 						"-z-10",
		// 						"z-10"
    //           ],
    //         // blocklist: [/^debug-/],
    //         // keyframes: true,
    //     },
    // },
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1080px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        fontFamily: {
            ...fontFamily,
            'sans': ['"Red Hat Text"', 'Helvetica', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            'mono': ['"Red Hat Mono"', 'Monospace', 'ui-monospace', 'SFMono-Regular', 'serif'],
            'serif': ['ui-serif', 'Georgia', 'serif'],
            'display': ['"Red Hat Display"', 'Helvetica', 'sans-serif'],
            'body': ['"Red Hat Text"', 'Helvetica', 'sans-serif'],
        },
        fontSize: {
          'xs': '.75rem',
          'sm': '.875rem',
          'tiny': '.875rem',
          'base': '1rem',
          'lg': '1.125rem',
          'xl': '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2rem',
          '5xl': '3rem',
          '6xl': '3.4rem',
          '7xl': '4.2rem',
        },
        extend: {
            typography: {
              DEFAULT: {
                css: {
                  h1: {
                    fontFamily: '"Red Hat Display"',
                    // fontSize: 'theme.text.5xl',
                  },
                  h2: {
                    fontFamily: '"Red Hat Display"',
                  },
                  h3: {
                    fontFamily: '"Red Hat Display"',
                  },
                  h4: {
                    fontFamily: '"Red Hat Display"',
                  },
                  h5: {
                    fontFamily: '"Red Hat Display"',
                  },
                  h6: {
                    fontFamily: '"Red Hat Display"',
                  },
                },
              },
            },
            colors: {
                'gray': {
                    500: '#433d3a',
                },
                'marine': {
                    500: '#111c38',
                },
                'azul': {
                    400: '#4995D1',
                    500: '#1B63A0',
                },
                'velour': {
                    500: '#e31017',
                },
                'amarillo': {
                    500: '#fbc226',
                },
                'rouge': {
                    500: '#ff0000',
                },
                'groseille': {
                    500: '#b51f1f',
                },
                'leman': {
                    500: '#00a79f',
                },
                'canard': {
                    500: '#007480',
                },
                'ardoise': {
                    500: '#413d3a',
                },
                'perle': {
                    500: '#cac7c7',
                },
            },
            spacing: {
                '120': '26rem',
            },
            height: {
                '120': '26rem',
            },
            minHeight: {
                '120': '26rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
