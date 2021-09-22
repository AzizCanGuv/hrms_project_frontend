import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./layouts/Dashboard";
import { Container } from "semantic-ui-react";
import Navi from "./layouts/Navi";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <SignUp />
        {/*<Dashboard/>*/}
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
