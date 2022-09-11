import React from 'react'
import { Button } from '@mui/material'

export function MenuButton({ title, onClick }) {
  return (
    <Button onClick={onClick}>
      {title}
    </Button>
  )
}