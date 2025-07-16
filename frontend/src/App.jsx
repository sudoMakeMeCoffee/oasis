import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import AdminLogin from './component/AdminLogin'
import UserSignup from './component/UserSignup';
import UserLogin from './component/UserLogin'

function App() {

  return (
    <ThemeProvider theme={{ }}>
        <AdminLogin />
        {/* <UserSignup />   */}
        {/* <UserLogin /> */}
    </ThemeProvider>
  )
}

export default App;
