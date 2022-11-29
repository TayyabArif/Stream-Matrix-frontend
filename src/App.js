import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import LegalCenter from "./Pages/LegalCenter/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/"
          element={
           <Main>
            <Home />
           </Main>
          }
        />
        <Route
          path="/create-package"
          element={
           <Main>
            <Order />
           </Main>
          }
        />
        <Route
          path="/legal-center"
          element={
           <Main>
            <LegalCenter />
           </Main>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
