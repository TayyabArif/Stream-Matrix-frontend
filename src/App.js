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
import Movies from "./Pages/Movies";
import Shows from "./Pages/Shows";
import Kids from "./Pages/kids";
import CommingSoon from "./Pages/ComingSoon";
import LiveContainer from "./Pages/Live";
import PlayVideo from "./Pages/PlayVideo";
import Video from "./Pages/PlayVideo/Video";
import FAQs from "./Pages/LegalCenter/FAQs";
import About from "./Pages/LegalCenter/About";
import Terms from "./Pages/LegalCenter/Terms";
import Refund from "./Pages/LegalCenter/Refund";
import Copyright from "./Pages/LegalCenter/Copyright";
import Privacy from "./Pages/LegalCenter/Privacy";
import Contact from "./Pages/LegalCenter/Contact";

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

        {/* start legal-center routes */}
        <Route
          path="/legal-center/FAQs"
          element={
           <Main>
            <LegalCenter>
              <FAQs />
            </LegalCenter>
           </Main>
          }
        />
        <Route
          path="/legal-center/About"
          element={
           <Main>
            <LegalCenter>
              <About />
            </LegalCenter>
           </Main>
          }
        />
         <Route
          path="/legal-center/terms"
          element={
           <Main>
            <LegalCenter>
              <Terms />
            </LegalCenter>
           </Main>
          }
        />
        <Route
          path="/legal-center/refund"
          element={
           <Main>
            <LegalCenter>
              <Refund />
            </LegalCenter>
           </Main>
          }
        />
        <Route
          path="/legal-center/copyright"
          element={
           <Main>
            <LegalCenter>
              <Copyright />
            </LegalCenter>
           </Main>
          }
        />
        <Route
          path="/legal-center/privacy"
          element={
           <Main>
            <LegalCenter>
              <Privacy />
            </LegalCenter>
           </Main>
          }
        />
        <Route
          path="/legal-center/contact"
          element={
           <Main>
            <LegalCenter>
              <Contact />
            </LegalCenter>
           </Main>
          }
        />
        {/* end legal-center routes */}

         <Route
          path="/movies"
          element={
           <Main>
            <Movies />
           </Main>
          }
        />
        <Route
          path="/shows"
          element={
           <Main>
            <Shows />
           </Main>
          }
        />
        <Route
          path="/kids"
          element={
           <Main>
            <Kids />
           </Main>
          }
        />
        <Route
          path="/coming-soon"
          element={
           <Main>
            <CommingSoon />
           </Main>
          }
        />
        <Route
          path="/live"
          element={
           <Main>
            <LiveContainer />
           </Main>
          }
        />
        <Route
          path="/play"
          element={
           <Main>
            <PlayVideo />
           </Main>
          }
        />
        <Route
          path="/play/:name"
          element={
           <Main>
            <Video />
           </Main>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
