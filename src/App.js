import "./App.css";
import FormikContanier from "./component/formik.contanier";

import { theme, ThemeProvider } from "@chakra-ui/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <FormikContanier />
      </div>
    </ThemeProvider>
  );
}

export default App;
