import { Box } from '@mui/material'
import React from 'react'

const Message = ({msg, bgColor, color}) => {
  return (
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: bgColor,
        color: color,
        padding: "0.5rem 0.3rem",
        fontSize: "15px",
        textAlign: "center",
        width: "50%",
        margin: "5rem auto",
        borderRadius: "0.5rem",
        boxShadow: `2px 2px 5px rgb(22, 5, 5)`,
      }}>
          <h2>{msg}</h2>
      </Box>
  )
}

export default Message