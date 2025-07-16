"use client"

import { useState, useEffect } from "react"
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardActions,
  CircularProgress,
  Container
} from "@mui/material"
import { LightbulbOutlined as LightbulbIcon } from "@mui/icons-material"

export default function ChallengeList() {
  const [challenges, setChallenges] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const data = [
          {
            id: 1,
            title: "String Reversal Challenge",
            description: "Create a function that reverses any string provided as input. Your solution should handle edge cases such as empty strings and special characters."
          },
          {
            id: 2,
            title: "Binary Tree Traversal",
            description: "Implement three different methods to traverse a binary tree: in-order, pre-order, and post-order. Analyze the time and space complexity of each approach."
          },
          {
            id: 3,
            title: "Authentication System",
            description: "Design and implement a secure authentication system with user registration, login, and password reset functionality. Ensure proper password hashing and security measures."
          }
        ]
        
        setChallenges(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to load challenges. Please try again later.")
        setLoading(false)
      }
    }

    fetchChallenges()
  }, [])

  const handleSolve = (challengeId) => {
    console.log(`Navigate to challenge solution page for ID: ${challengeId}`)
  }

  const truncateDescription = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }

  return (
    <Box
      className="relative overflow-hidden p-4"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0e0e0 0%, #333333 100%)",
        padding: { xs: 2, sm: 4, md: 6 }
      }}
    >
      <Container maxWidth="lg">
        <Box className="text-center space-y-4 mb-8">
          <LightbulbIcon
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
            className="font-bold tracking-wider"
            sx={{ color: "#E91E63", textShadow: "none", textAlign: "center" }}
          >
            Available Challenges
          </Typography>
          <Typography 
            variant="body1" 
            className="text-lg" 
            sx={{ 
              color: "#FFFFFF", 
              textAlign: "center",
              fontSize: "1.1rem",
              fontWeight: "500",
              textShadow: "0 1px 3px rgba(0,0,0,0.5)"
            }}
          >
            Choose a challenge to test your skills and improve your abilities
          </Typography>
        </Box>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
            <CircularProgress sx={{ color: "#E91E63" }} />
          </Box>
        )}

        {error && (
          <Typography 
            variant="body1" 
            sx={{ 
              color: "#F44336", 
              textAlign: "center", 
              my: 4,
              fontWeight: "bold"
            }}
          >
            {error}
          </Typography>
        )}

        {!loading && !error && (
          <Grid 
            container 
            spacing={3}
            justifyContent="center"
          >
            {challenges.map((challenge) => (
              <Grid item xs={12} sm={6} md={4} key={challenge.id} sx={{ display: 'flex' }}>
                <Card 
                  elevation={0}
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: "#747272ff",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.6)",
                      transform: "translateY(-5px)",
                    },
                    borderRadius: "0.75rem",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h2"
                      sx={{ 
                        color: "#F0F0F0", 
                        fontWeight: "bold",
                        mb: 2
                      }}
                    >
                      {challenge.title}
                    </Typography>
                    <Typography sx={{ color: "#A0A0A0" }}>
                      {truncateDescription(challenge.description)}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => handleSolve(challenge.id)}
                      sx={{
                        bgcolor: "#E91E63",
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        py: 1.5,
                        fontSize: "1.125rem",
                        borderRadius: "0.5rem",
                        transition: "all 0.3s ease-in-out",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                        "&:hover": {
                          bgcolor: "#C2185B",
                          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.4)",
                        },
                        "&:active": {
                          transform: "scale(0.98)",
                        },
                        "&:focus": {
                          outline: "none",
                          boxShadow: "0 0 0 2px #E91E63, 0 0 0 4px rgba(0, 0, 0, 0.5)",
                        },
                      }}
                    >
                      Solve
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  )
}