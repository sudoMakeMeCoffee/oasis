"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Button,
  Paper,
  Container,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  Divider,
  Alert,
  TextField
} from "@mui/material"
import { CodeOutlined as CodeIcon } from "@mui/icons-material"

export default function Challenge() {
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("javascript")
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  
  // Mocked challenge data - in a real app, this would come from API/props
  const challenge = {
    id: 1,
    title: "String Reversal Challenge",
    description: "Create a function that reverses any string provided as input. Your solution should handle edge cases such as empty strings and special characters.",
    sampleInput: "hello",
    sampleOutput: "olleh",
    constraints: [
      "Function should be named 'reverseString'",
      "Time complexity should be O(n)",
      "Space complexity should be O(n)",
      "Input string length can be between 0 and 10^5 characters"
    ]
  }

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value)
  }

  const handleCodeChange = (event) => {
    setCode(event.target.value)
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    setError(null)
    setResult(null)
    
    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Mock response for demo purposes
      if (code.includes("reverseString") && code.includes("return")) {
        setResult({
          status: "success",
          message: "All test cases passed!",
          executionTime: "45ms",
          memoryUsed: "5.2MB"
        })
      } else {
        setResult({
          status: "failed",
          message: "Some test cases failed",
          failedTests: ["Test case 2: Expected 'olleh' but got 'hello'"],
          executionTime: "42ms",
          memoryUsed: "5.1MB"
        })
      }
    } catch (err) {
      setError("Failed to submit solution. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Box
      className="relative overflow-hidden"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0e0e0 0%, #333333 100%)",
        padding: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Box className="text-center space-y-2 mb-4">
          <CodeIcon
            sx={{
              mx: "auto",
              height: 48,
              width: 48,
              color: "#E91E63",
              textAlign: "center",
              display: "block",
            }}
          />
          <Typography
            variant="h4"
            component="h1"
            sx={{ color: "#E91E63", textShadow: "none", textAlign: "center", mb: 2 }}
          >
            Challenge
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Left side: Challenge details */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: "#747272ff",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
                borderRadius: "0.75rem",
                height: "100%",
                p: 3,
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Typography 
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
              
              <Typography sx={{ color: "#A0A0A0", mb: 3 }}>
                {challenge.description}
              </Typography>
              
              <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.1)", my: 2 }} />
              
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "#F0F0F0", 
                  fontWeight: "bold",
                  mb: 1
                }}
              >
                Sample Input
              </Typography>
              <Paper
                sx={{
                  bgcolor: "#2C2C2C",
                  p: 2,
                  mb: 2,
                  borderRadius: "0.5rem",
                  fontFamily: "monospace"
                }}
              >
                <Typography sx={{ color: "#F0F0F0" }}>
                  {challenge.sampleInput}
                </Typography>
              </Paper>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "#F0F0F0", 
                  fontWeight: "bold",
                  mb: 1
                }}
              >
                Sample Output
              </Typography>
              <Paper
                sx={{
                  bgcolor: "#2C2C2C",
                  p: 2,
                  mb: 2,
                  borderRadius: "0.5rem",
                  fontFamily: "monospace"
                }}
              >
                <Typography sx={{ color: "#F0F0F0" }}>
                  {challenge.sampleOutput}
                </Typography>
              </Paper>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "#F0F0F0", 
                  fontWeight: "bold",
                  mb: 1,
                  mt: 1
                }}
              >
                Constraints
              </Typography>
              <Box sx={{ color: "#A0A0A0" }}>
                <ul style={{ paddingLeft: "1.5rem" }}>
                  {challenge.constraints.map((constraint, index) => (
                    <li key={index}>
                      <Typography sx={{ color: "#A0A0A0", mb: 1 }}>
                        {constraint}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            </Paper>
          </Grid>
          
          {/* Right side: Code editor and submission */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: "#747272ff",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
                borderRadius: "0.75rem",
                height: "100%",
                p: 3,
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: "#F0F0F0", 
                    fontWeight: "bold"
                  }}
                >
                  Your Solution
                </Typography>
                
                <FormControl 
                  variant="outlined" 
                  sx={{ 
                    minWidth: 150,
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "#2C2C2C",
                      color: "#F0F0F0",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.1)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#E91E63",
                      },
                    },
                    "& .MuiSelect-icon": {
                      color: "#A0A0A0",
                    },
                  }}
                  size="small"
                >
                  <InputLabel id="language-select-label" sx={{ color: "#A0A0A0" }}>Language</InputLabel>
                  <Select
                    labelId="language-select-label"
                    id="language-select"
                    value={language}
                    label="Language"
                    onChange={handleLanguageChange}
                  >
                    <MenuItem value="javascript">JavaScript</MenuItem>
                    <MenuItem value="python">Python</MenuItem>
                    <MenuItem value="java">Java</MenuItem>
                    <MenuItem value="cpp">C++</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              
              <TextField
                fullWidth
                multiline
                rows={15}
                variant="outlined"
                placeholder={
                  language === "javascript" 
                    ? "// Write your solution here\nfunction reverseString(str) {\n  // Your code here\n}" 
                    : language === "python"
                    ? "# Write your solution here\ndef reverse_string(s):\n    # Your code here\n    pass"
                    : "// Write your solution here"
                }
                sx={{
                  mb: 3,
                  flexGrow: 1,
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#2C2C2C",
                    color: "#F0F0F0",
                    fontFamily: "monospace",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#E91E63",
                      boxShadow: "0 0 5px rgba(233, 30, 99, 0.3)",
                    },
                  }
                }}
                value={code}
                onChange={handleCodeChange}
              />
              
              <Button
                variant="contained"
                size="large"
                onClick={handleSubmit}
                disabled={submitting}
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
                {submitting ? (
                  <>
                    <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                    Submitting...
                  </>
                ) : "Submit Solution"}
              </Button>
              
              {/* Results section */}
              {(result || error) && (
                <Box sx={{ mt: 3 }}>
                  <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.1)", my: 2 }} />
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: "#F0F0F0", 
                      fontWeight: "bold",
                      mb: 2
                    }}
                  >
                    Result
                  </Typography>
                  
                  {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                      {error}
                    </Alert>
                  )}
                  
                  {result && (
                    <>
                      <Alert 
                        severity={result.status === "success" ? "success" : "error"}
                        sx={{ mb: 2 }}
                      >
                        {result.message}
                      </Alert>
                      
                      <Paper
                        sx={{
                          bgcolor: "#2C2C2C",
                          p: 2,
                          mb: 2,
                          borderRadius: "0.5rem"
                        }}
                      >
                        <Typography sx={{ color: "#A0A0A0", mb: 1 }}>
                          <strong>Execution Time:</strong> {result.executionTime}
                        </Typography>
                        <Typography sx={{ color: "#A0A0A0", mb: 1 }}>
                          <strong>Memory Used:</strong> {result.memoryUsed}
                        </Typography>
                        
                        {result.failedTests && (
                          <>
                            <Typography sx={{ color: "#F44336", mt: 2, mb: 1 }}>
                              <strong>Failed Test Cases:</strong>
                            </Typography>
                            <ul style={{ paddingLeft: "1.5rem", color: "#F44336" }}>
                              {result.failedTests.map((test, index) => (
                                <li key={index}>
                                  <Typography sx={{ color: "#F44336" }}>
                                    {test}
                                  </Typography>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </Paper>
                    </>
                  )}
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}