import Header from "./Components/Header.jsx";
import UserInputBox from "./Components/UserInputBox.jsx";
import InputUi from "./Components/InputUI.jsx";
import Result from "./Components/Result.jsx";
import {
  calculateInvestmentResults,
  computeResult,
} from "./util/investment.js";
import { useState, StrictMode } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initInv: "",
    annualInv: "",
    expReturn: "",
    years: "",
  });
  return (
    <>
      <Header />
      <UserInputBox>
        <InputUi
          identifier={"initInv"}
          userInput={userInput}
          setUserInput={setUserInput}
        >
          INITIAL INVESTMENT
        </InputUi>
        <InputUi
          identifier={"annualInv"}
          userInput={userInput}
          setUserInput={setUserInput}
        >
          ANNUAL INVESTMENT
        </InputUi>
        <InputUi
          identifier={"expReturn"}
          userInput={userInput}
          setUserInput={setUserInput}
        >
          EXPECTED RETURN
        </InputUi>
        <InputUi
          identifier={"years"}
          userInput={userInput}
          setUserInput={setUserInput}
        >
          DURATION
        </InputUi>
      </UserInputBox>
      <Result investmentData={computeResult(userInput)} />
    </>
  );
}

export default App;
