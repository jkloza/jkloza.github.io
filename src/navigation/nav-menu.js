import React from 'react'
import {Box} from '@mui/material'
import { MenuButton } from '../atoms/menu-button'
import { Link } from 'react-router-dom'

export function NavMenu() {
  const pages = [
    {label: 'Home', link: '/'},
    {label: 'About', link: '/about'},
    {label: 'Resume', link: '/resume'}
  ]
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
    {pages.map((page) => (
      <Link key={page.label} to={page.link} style={{ textDecoration: 'none' }}>
      <MenuButton
        title={page.label}
      />
      </Link>
    ))}
  </Box>
  )
}