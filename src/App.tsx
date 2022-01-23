import React, { useEffect } from "react";
import "./App.css";
import MainPage from "./containers/MainPage";
// import RegistrationPage from "./containers/RegistrationPage";
// import ProductCounter from "./ProductCounter";
// import Form from "./Form";

const App = () => {
  useEffect(() => {
    console.log("App mount");
  }, []);
  // const [orangeCount, setOrangeCount] = useState(0);
  // const [appleCount, setAppleCount] = useState(0);
  return (
    // <RegistrationPage />

    <MainPage />

    // <div className="App">
    //   <ProductCounter
    //     productName="Orange"
    //     count={orangeCount}
    //     setCount={setOrangeCount}
    //   />
    //   <ProductCounter
    //     productName="Apple"
    //     count={appleCount}
    //     setCount={setAppleCount}
    //   />

    //   <Form />
    // </div>
  );
};

export default App;
