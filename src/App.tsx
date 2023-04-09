import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { store } from "./app/store";
// @ts-ignore
import Nerd from "./fonts/bbt.TTF";
import rootClientRouter from "./navigation/Router";

// const theme = createTheme({
//   typography: {
//     fontFamily: "Nerd",
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: `
//         @font-face {
//           font-family: 'Nerd';
//           font-size: 10;
//           src: local('Nerd'), local('Nerd-Regular'), url(${Nerd}) format('truetype');
//           unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
//         }
//       `,
//     },
//   },
// });

function App() {
  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
        <RouterProvider router={rootClientRouter} />
      {/* </ThemeProvider> */}
    </Provider>
  );
}

export default App;
