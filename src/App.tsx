import React from "react";
import BaseTitle from "./BaseTitle";
import Button from "./components/atoms/Button/BaseButton";
import BorderButton from "./components/atoms/Button/BorderButton";
import Facebook from "./assets/facebook.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BaseTitle label="This is title." />
        <Button handler={(e) => console.log(e)}>Sample</Button>
        <BorderButton handler={(e) => console.log(e)}>
          <img src={Facebook} alt="facebook" />
          プロフィールを見る
        </BorderButton>
      </header>
    </div>
  );
}

export default App;
