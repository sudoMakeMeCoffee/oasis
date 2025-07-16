import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AdminLogin from './component/AdminLogin'
import UserSignup from './component/UserSignup'
import UserLogin from './component/UserLogin'
import TeamCreation from './component/TeamCreation'
import ChallengeList from './component/ChallengeList'
import Challenge from './component/Challenge'
import LeaderBoard from './component/LeaderBoard'

function App() {
  return (
    <ThemeProvider theme={{ }}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/create-team" element={<TeamCreation />} />
          <Route path="/challenges" element={<ChallengeList />} />
          <Route path="/challenge/:id" element={<Challenge />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/" element={<ChallengeList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
