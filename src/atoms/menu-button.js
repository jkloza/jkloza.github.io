import React from 'react'
import { Button, Typography } from '@mui/material'
import { theme } from '../mui/theme'

export function MenuButton({ title, onClick }) {
  return (
    <Button variant="menu" onClick={onClick}>
      <Typography style={{color: theme.palette.text.primary}}>
      {title}
      </Typography>
    </Button>
  )
}