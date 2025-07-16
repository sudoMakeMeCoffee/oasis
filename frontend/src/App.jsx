import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import AdminLogin from './component/AdminLogin'
import UserSignup from './component/UserSignup';

function App() {

  return (
    <ThemeProvider theme={{ }}>
        {/* <AdminLogin /> */}
        <UserSignup />  
    </ThemeProvider>
  )
}

export default App;
