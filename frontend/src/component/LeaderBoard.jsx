"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Typography,
  Paper,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Divider,
} from "@mui/material"
import { EmojiEventsOutlined as TrophyIcon } from "@mui/icons-material"
import axios from "axios"

export default function LeaderBoard() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true)
      try {
        // const response = await axios.get('http://localhost:8080/api/v1/leaderboard')
        // setTeams(response.data)
        
        // Mock data for demonstration
        setTimeout(() => {
          const mockData = [
            { id: 1, name: "Binary Beasts", points: 1250 },
            { id: 2, name: "Code Wizards", points: 980 },
            { id: 3, name: "Syntax Slayers", points: 850 },
            { id: 4, name: "Algorithm Aces", points: 720 },
            { id: 5, name: "Bug Hunters", points: 650 },
            { id: 6, name: "Data Dragons", points: 520 },
            { id: 7, name: "Function Fellows", points: 480 },
            { id: 8, name: "Hackathon Heroes", points: 350 },
          ]
          setTeams(mockData)
          setLoading(false)
        }, 1000)
      } catch (err) {
        console.error("Failed to fetch leaderboard:", err)
        setError("Failed to load leaderboard data. Please try again later.")
        setLoading(false)
      }
    }

    fetchLeaderboard()
  }, [])

  return (
    <Box
      className="relative overflow-hidden"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0e0e0 0%, #333333 100%)",
        padding: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box className="text-center space-y-3 mb-6">
          <TrophyIcon
            sx={{
              mx: "auto",
              height: 64,
              width: 64,
              color: "#E91E63",
              textAlign: "center",
              display: "block",
            }}
          />
          <Typography
            variant="h4"
            component="h1"
            sx={{ color: "#E91E63", textShadow: "none", textAlign: "center", mb: 1 }}
          >
            OASIS Leaderboard
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#f9f6f6ff", textAlign: "center", fontSize: "1.1rem", maxWidth: "700px", mx: "auto", fontWeight: "500", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
          >
            Top performing teams ranked by challenge completion points
          </Typography>
          <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.1)", my: 3 }} />
        </Box>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
            <CircularProgress sx={{ color: "#E91E63" }} />
          </Box>
        ) : error ? (
          <Box sx={{ textAlign: "center", p: 3 }}>
            <Typography sx={{ color: "#F44336", fontWeight: "bold" }}>
              {error}
            </Typography>
          </Box>
        ) : (
          <TableContainer 
            component={Paper}
            elevation={0}
            sx={{
              bgcolor: "#747272ff",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
              borderRadius: "0.75rem",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.6)",
              },
              overflow: 'hidden'
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="leaderboard table">
              <TableHead>
                <TableRow sx={{ 
                  bgcolor: "rgba(0, 0, 0, 0.3)",
                  "& th": { 
                    color: "#F0F0F0", 
                    fontWeight: "bold", 
                    fontSize: "1.1rem",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                  } 
                }}>
                  {/* Make all column headers consistent */}
                  <TableCell align="center" width="10%" sx={{ py: 2 }}>Rank</TableCell>
                  <TableCell sx={{ py: 2 }}>Team</TableCell>
                  <TableCell align="right" width="20%" sx={{ py: 2 }}>Points</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teams.map((team, index) => (
                  <TableRow
                    key={team.id}
                    sx={{
                      "&:nth-of-type(odd)": { bgcolor: "rgba(0, 0, 0, 0.1)" },
                      "&:hover": { bgcolor: "rgba(233, 30, 99, 0.1)" },
                      transition: "background-color 0.2s",
                      ...(index < 3 && {
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: "4px",
                          backgroundColor: 
                            index === 0 ? "#FFD700" : // Gold
                            index === 1 ? "#C0C0C0" : // Silver
                            "#CD7F32", // Bronze
                        }
                      })
                    }}
                  >
                    {/* Make all rank numbers centered to match header */}
                    <TableCell 
                      align="center" 
                      sx={{ 
                        color: index < 3 
                          ? (index === 0 ? "#FFD700" : index === 1 ? "#C0C0C0" : "#CD7F32") 
                          : "#F0F0F0", 
                        fontWeight: "bold",
                        fontSize: "1.1rem"
                      }}
                    >
                      {index + 1}
                    </TableCell>
                    <TableCell sx={{ color: "#F0F0F0", fontWeight: index < 3 ? "bold" : "normal" }}>
                      {team.name}
                    </TableCell>
                    <TableCell align="right" sx={{ 
                      color: "#E91E63", 
                      fontWeight: "bold",
                      fontSize: index < 3 ? "1.1rem" : "inherit"
                    }}>
                      {team.points.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <Box sx={{ mt: 4, textAlign: "center", color: "#e1ddddff" }}>
          <Typography variant="body2" sx={{ mt: 2, fontSize: "0.9rem" }}>
            Points are calculated based on challenge completion time, accuracy, and complexity.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, fontSize: "0.9rem" }}>
            Leaderboard updates every 15 minutes. Last updated: {new Date().toLocaleTimeString()}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}