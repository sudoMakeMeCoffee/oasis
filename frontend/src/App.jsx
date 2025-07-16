import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import AdminLogin from './component/AdminLogin'
import UserSignup from './component/UserSignup'
import UserLogin from './component/UserLogin'
import TeamCreation from './component/TeamCreation'
import ChallengeList from './component/ChallengeList'

function App() {

  return (
    <ThemeProvider theme={{ }}>
        {/* <AdminLogin /> */}
        {/* <UserSignup />   */}
        {/* <UserLogin /> */}
        {/* <TeamCreation /> */}
        {/* <ChallengeList /> */}
    </ThemeProvider>
  )
}

export default App;
