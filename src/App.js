import React, { Component } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { StoreProvider } from 'easy-peasy'
import store from '../src/redux/store'
import RouterWeb from './router-web'
import theme from './common/theme'
import 'bootstrap/dist/css/bootstrap.min.css'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0,
    padding: 0,
    -sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Noto+Sans');
    background: ${theme.colors.white_1};
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <React.Fragment>
            <GlobalStyle />
            <RouterWeb />
          </React.Fragment>
        </StoreProvider>
      </ThemeProvider>
    )
  }
}

export default App
