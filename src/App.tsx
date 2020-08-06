import React from "react";
import styled from "styled-components";
import BaseTitle from "./BaseTitle";
import Facebook from "./assets/facebook.svg";
import {
  Button,
  BorderButton,
  CltButton,
  BaseTextArea,
} from "./components/atoms";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BaseTitle label="This is title." />
        <Button handler={(e) => console.log(e)}>スカウトを送る</Button>
        <BorderButton handler={(e) => console.log(e)}>
          <img src={Facebook} alt="facebook" />
          プロフィールを見る
        </BorderButton>
        <CltButton handler={(e) => console.log(e)} disabled={true}>
          スカウト送信
        </CltButton>
        <LayoutSection>
          <BaseTextArea label={"求める人物像"} />
        </LayoutSection>
      </header>
    </div>
  );
}

const LayoutSection = styled.div`
  margin: 32px 0 0 0;
`;

export default App;
