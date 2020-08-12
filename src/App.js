import React, { useEffect } from 'react'
import Layout from './layout'
import styled from 'styled-components'
import MyAutoComplete from './components/autoComplete/autoComplete'
import {
  Link,
  BrowserRouter as Router,
  Route,
  useParams,
  Switch,
} from 'react-router-dom'
import Name from './components/Name'

import { ThemeProvider } from './provider/themeProvider'

const StyledAutoCompleteContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    top: 10%;
    height: 100%;
    align-items: center;
  }
`

export default function App() {
  useEffect(() => {
    console.log('didmount')
  }, [])
  return (
    <div className="App">
      <ThemeProvider>
        <Layout>
          <StyledAutoCompleteContainer>
            <MyAutoComplete />
          </StyledAutoCompleteContainer>
        </Layout>
      </ThemeProvider>

      <Router>
        <Link to={{ pathname: 'name', state: { age: 27 } }}>Name</Link>

        <Route path="/name" component={Name} />
      </Router>
    </div>
  )
}
