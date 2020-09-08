import React from "react";
import {
  UITypography,
  Variants,
  Tags,
  H1,
  H2,
  H3,
  H4, 
  H5,
  H6,
  Body1,
  Body2,
  Caption,
} from "./components/atoms";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: "6rem",
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <UITypography variant={Variants.h1} component={Tags.p}>Hello world</UITypography>
        <H1>Hello world</H1>
        <H2>Hello world</H2>
        <H3>Hello world</H3>
        <H4>Hello world</H4>
        <H5>Hello world</H5>
        <H6>Hello world</H6>
        <Body1>Hello world</Body1>
        <Body2>Hello world</Body2>
        <Caption>Hello world</Caption>
      </div>
    </ThemeProvider>
    
  );
}



export default App;
