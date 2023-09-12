/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Backdrop: "#00000030",
        DarkText: "#181010",
        PokeRed: "#fc0000",
        PokeWhite: "#fefeff",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      fontFamily: {
        pokemon: "Pokemon",
        pressStart: "Press Start 2P",
      },
      cursor: {
        glovePointer: 'url("./glove_cursor_pointer.png") 14 0, pointer',
        default: 'url("./glove_cursor.png"), auto',
      },
      /* before: {
        arrowPointer: {
          position: "absolute",
          left: "0",
          transform: "translate(-100%, -5%)",
          content: ">",
          fontFamily: ["pressStart", "monospace"],
          fontSize: "0.8rem",
        },
      }, */
    },
  },
  plugins: [],
};
