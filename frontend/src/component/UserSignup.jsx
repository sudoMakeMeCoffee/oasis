"use client"

import { Box, Typography, TextField, Button, Link, Paper } from "@mui/material"
import { PersonAddAlt1 as PersonAddAlt1Icon } from "@mui/icons-material"
import { useState } from "react" // Keep useState for the default function structure

export default function AdminSignUp() {
  // These state variables are included as placeholders for your team to implement logic.
  // They are not actively used for UI behavior in this pure UI version.
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState(null)

  // This handleSubmit function is a placeholder. Your team will fill in the actual logic.
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Sign Up Form submitted (placeholder function).")
    // Your team will add logic here for:
    // 1. Setting isSubmitting to true
    // 2. Validating password and confirmPassword match
    // 3. Making an API call to register the user
    // 4. Handling success/error messages
    // 5. Setting isSubmitting to false
  }

  return (
    // Main container with a light-to-dark gradient background
    <Box
      className="relative overflow-hidden p-4"
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e0e0e0 0%, #333333 100%)", // Light to dark grey gradient
      }}
    >
      <Paper
        elevation={0} // Remove default MUI elevation for custom shadow
        className="w-full max-w-md mx-auto p-6 md:p-8 rounded-xl relative z-20"
        sx={{
          bgcolor: "#747272ff", // Dark muted grey from image
          border: "1px solid rgba(255, 255, 255, 0.05)", // Very subtle light border
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)", // Soft, diffused shadow
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.6)", // Slightly more pronounced shadow on hover
          },
        }}
      >
        <Box className="text-center space-y-4 mb-6">
          <PersonAddAlt1Icon
            sx={{
              mx: "auto",
              height: 64,
              width: 64,
              color: "#E91E63", // Dark Pink
              textAlign: "center", // Center the icon
              display: "block", // Ensure it behaves like a block element
            }}
          />
          <Typography
            variant="h4"
            component="h1"
            className="font-bold tracking-wider"
            sx={{ color: "#E91E63", textShadow: "none", textAlign: "center" }} // Dark Pink, no text shadow
          >
            Awaken the Builder
          </Typography>
          <Typography variant="h6" className="text-lg" sx={{ color: "#e8e6e6ff", textAlign: "center" }}>
            Register your credentials to gain ultimate control.
          </Typography>
        </Box>
        <Box component="form" className="space-y-6" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            placeholder="user@oasis.com"
            variant="outlined"
            InputLabelProps={{
              sx: { color: "#A0A0A0" }, // Lighter grey for labels
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "#2C2C2C", // Slightly lighter dark grey for input background
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.1)", // Very subtle border
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.2)", // Slightly more visible on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#E91E63", // Dark Pink border on focus
                  boxShadow: "0 0 5px rgba(233, 30, 99, 0.3)", // Subtle pink glow on focus
                },
                "& input": {
                  color: "#F0F0F0", // Light grey for input text
                  textAlign: "left", // Left-align input text
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#A0A0A0", // Lighter grey for placeholder
                  opacity: 1,
                  textAlign: "left", // Left-align placeholder text
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
              sx: { color: "#A0A0A0" }, // Lighter grey for labels
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "#2C2C2C", // Slightly lighter dark grey for input background
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.1)", // Very subtle border
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.2)", // Slightly more visible on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#E91E63", // Dark Pink border on focus
                  boxShadow: "0 0 5px rgba(233, 30, 99, 0.3)", // Subtle pink glow on focus
                },
                "& input": {
                  color: "#F0F0F0", // Light grey for input text
                  textAlign: "left", // Left-align input text
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#A0A0A0", // Lighter grey for placeholder
                  opacity: 1,
                  textAlign: "left", // Left-align placeholder text
                },
              },
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            fullWidth
            id="confirm-password"
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            variant="outlined"
            InputLabelProps={{
              sx: { color: "#A0A0A0" }, // Lighter grey for labels
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "#2C2C2C", // Slightly lighter dark grey for input background
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.1)", // Very subtle border
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.2)", // Slightly more visible on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#E91E63", // Dark Pink border on focus
                  boxShadow: "0 0 5px rgba(233, 30, 99, 0.3)", // Subtle pink glow on focus
                },
                "& input": {
                  color: "#F0F0F0", // Light grey for input text
                  textAlign: "left", // Left-align input text
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#A0A0A0", // Lighter grey for placeholder
                  opacity: 1,
                  textAlign: "left", // Left-align placeholder text
                },
              },
            }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            disabled={isSubmitting}
            sx={{
              bgcolor: "#E91E63", // Dark Pink
              color: "#FFFFFF",
              fontWeight: "bold",
              py: 1.5,
              fontSize: "1.125rem",
              borderRadius: "0.5rem",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Soft shadow for button
              "&:hover": {
                bgcolor: "#C2185B", // Darker Pink on hover
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.4)", // Slightly more pronounced shadow on hover
              },
              "&:active": {
                transform: "scale(0.98)",
              },
              "&:focus": {
                outline: "none",
                boxShadow: "0 0 0 2px #E91E63, 0 0 0 4px rgba(0, 0, 0, 0.5)", // Subtle focus ring
              },
            }}
          >
            Start Mission 
          </Button>
          {/* Message display (kept for placeholder, but hidden if message is null) */}
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
          <Typography variant="body1" className="text-center mt-4 " sx={{ color: "#e9e5e5ff" ,fontWeight: "bold", textAlign: "center" }}>
            Already have an account?{" "}
            <Link
              href="/login"
              sx={{ color: "#E91E63", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
              Login here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}
