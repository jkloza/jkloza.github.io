import React from 'react'
import { Button, Typography } from '@mui/material'

export function MenuButton({ title, onClick }) {
  return (
    <Button variant="menu" onClick={onClick}>
      <Typography>
      {title}
      </Typography>
    </Button>
  )
}