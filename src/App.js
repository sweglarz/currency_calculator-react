import Form from "./Form";
import Header from "./Header";
import {useState} from "react";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState();
  const calculateResult = (amount, currency) => {
    const findRate = currencies.find(({summary}) => summary === currency).rate;

    setResult({
      afterConversion: +amount / findRate,
      currency,
    });
  };

  return (
    <>
      <Header />
      <Form calculateResult={calculateResult} result ={result}/>
    </>
  );
};

export default App;
