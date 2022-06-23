import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Login from "./components/Login";
import Teste from "./components/Teste";

const App = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <Login submitted={submitted} setSubmitted={setSubmitted} />
      <Teste submitted={submitted} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
