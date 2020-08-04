import React from "react";
import BaseTitle from "./BaseTitle";
import UIButton from "./components/atoms/UIButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BaseTitle label="This is title." />
        <UIButton label='sample'/>
      </header>
    </div>
  );
}

export default App;
