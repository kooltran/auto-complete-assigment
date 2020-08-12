import React from 'react'
import Header from './Header'
import Layout from './Layout'
import GlobalTheme from '../theme/globalTheme'

import { useThemeContext } from '../provider/themeProvider'

const AppLayout = ({ children }) => {
  const [mode] = useThemeContext()

  return (
    <>
      <GlobalTheme mode={mode} />
      <Layout>
        <Header />
        {children}
      </Layout>
    </>
  )
}

export default AppLayout
