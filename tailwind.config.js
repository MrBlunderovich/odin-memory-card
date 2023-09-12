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
        glovePointer: 'url("./glove_cursor_pointer.png") 14 0, pointer',
        default: 'url("./glove_cursor.png"), auto',
      },
    },
  },
  plugins: [],
};
