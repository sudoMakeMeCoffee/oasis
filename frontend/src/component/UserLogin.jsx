"use client"

import { Box, Typography, TextField, Button, Link, Paper } from "@mui/material"
import { Person as PersonIcon } from "@mui/icons-material"
import { useState } from "react"

export default function UserLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Login Form submitted (placeholder function).")
    //js
  }

  return (
    <Box
      className="relative overflow-hidden p-4"
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e0e0e0 0%, #333333 100%)",
      }}
    >
      <Paper
        elevation={0}
        className="w-full max-w-md mx-auto p-5 md:p-6 rounded-xl relative z-20"
        sx={{
          bgcolor: "#747272ff",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.6)",
          },
        //   maxWidth: "350px",
        }}
      >
        <Box className="text-center space-y-3 mb-5">
          <PersonIcon
            sx={{
              mx: "auto",
              height: 56,
              width: 56,
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
            User Login
          </Typography>
          <Typography variant="subtitle1" className="text-lg" sx={{ color: "#e1ddddff", textAlign: "center", fontSize: "0.9rem", paddingBottom: "0.5rem" }}>
            Enter your credentials to access your account.
          </Typography>
        </Box>

        <Box component="form" className="space-y-4" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            placeholder="user@oasis.com"
            variant="outlined"
            InputLabelProps={{
              sx: { color: "#A0A0A0" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "#2C2C2C",
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
                "& input": {
                  color: "#F0F0F0",
                  textAlign: "left",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#A0A0A0",
                  opacity: 1,
                  textAlign: "left",
                },
              },
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <TextField
            fullWidth
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            variant="outlined"
            InputLabelProps={{
              sx: { color: "#A0A0A0" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "#2C2C2C",
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
                "& input": {
                  color: "#F0F0F0",
                  textAlign: "left",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#A0A0A0",
                  opacity: 1,
                  textAlign: "left",
                },
              },
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            disabled={isSubmitting}
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
            Login
          </Button>
          
          {message && (
            <Typography
              variant="body2"
              className="text-center mt-4"
              sx={{
                color: message.type === "success" ? "#4CAF50" : "#F44336",
                fontWeight: "bold",
                textShadow:
                  message.type === "success" ? "0 0 5px rgba(76, 175, 80, 0.3)" : "0 0 5px rgba(244, 67, 54, 0.3)",
              }}
            >
              {message.text}
            </Typography>
          )}

          <Typography variant="body1" className="text-center mt-4" sx={{ color: "#e9e5e5ff", fontWeight: "bold", textAlign: "center", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
            Don't have an account?{" "}
            <Link
              href="/signup"
              sx={{ color: "#E91E63", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
              Register here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}