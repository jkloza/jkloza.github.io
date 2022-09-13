import React from 'react'
import HelloComponent from '../molecules/hellos'
import { Typography, Grid } from '@mui/material'
import OrangeCircle from '../assets/orange-circle'

// Styles
const headingStyles = {
	marginTop: "10%",
	marginBottom: 30,
	maxWidth: 320,
}

// const pageStyles = {
// 	color: '#232129',
// 	padding: 96,
// 	fontFamily: '-apple-system, Roboto, sans-serif, serif',
// }

// TODO: Get actual height of page and not a guess!
export default function Home() {
  return (
		<Grid container justifyContent="center" style={{ height: 630, background: 'linear-gradient(180deg, white 50%, #F4D06F 50%)' }}>
    <Grid container justifyContent="center" item xs={5} style={{ marginTop: '2%' }}>
      <OrangeCircle />
    </Grid>
    <Grid item xs={7}>
			<div style={headingStyles}>
				<HelloComponent />
			</div>
      <Typography variant="h5">I'm Juli. Welcome to my page!</Typography>
    </Grid>
		</Grid>

  )
}