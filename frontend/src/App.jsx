import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import AdminLogin from './component/AdminLogin'
import UserSignup from './component/UserSignup'
import UserLogin from './component/UserLogin'
import TeamCreation from './component/TeamCreation'

function App() {

  return (
    <ThemeProvider theme={{ }}>
        {/* <AdminLogin /> */}
        {/* <UserSignup /> */}  
        {/* <UserLogin /> */}
        <TeamCreation />
    </ThemeProvider>
  )
}

export default App;
