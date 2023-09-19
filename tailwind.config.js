/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Backdrop: "#00000050",
        DarkText: "#181010",
        PokeRed: "#fc0000",
        PokeWhite: "#fefeff",
        MainFont: "#212529",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      fontFamily: {
        pokemon: "Pokemon",
        pressStart: "Press_Start_2P",
      },
      cursor: {
        glovePointer: 'url("/glove_cursor_pointer.png") 14 0, pointer',
        default: 'url("/glove_cursor.png"), auto',
      },
      animation: {
        grow: "grow 300ms linear",
        fadein: "fadein 200ms linear",
      },
      keyframes: {
        grow: {
          from: {
            transform: "scale(0.1)",
            opacity: "0",
          },
          to: {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        fadein: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      transitionProperty: {
        bgc: "background-color",
        /* bgc: {
          transitionProperty: "background-color",
          transitionTimingFunction: "ease",
          transitionDuration: "150ms",
        }, */
      },
      /* transition: {
        flip: {
          transitionProperty: "transform",
          transitionTimingFunction: "linear",
          transitionDuration: "300ms",
        },
      }, */
    },
  },
  plugins: [],
};
