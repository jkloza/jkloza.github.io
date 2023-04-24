import React from 'react'
import HelloComponent from '../molecules/Hellos'
import { Typography, Grid } from '@mui/material'
import OrangeCircle from '../assets/orange-circle'
import ClickableCard from '../molecules/ClickableCard'
import juli from '../assets/juli-transparent.png'
import './home.css'

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
  const cardContent = 'This is a sample of the main text that will go in this box. If you click the box, it will flip around and say something else, like a secret little joke.'
  return (
    <>
    <Grid container justifyContent="center" item xs={5} style={{ marginTop: '2%' }}>
      <img src={juli} alt="headshot of juli" height={200} width={200} style={{position: 'absolute'}} />
      <OrangeCircle>
      </OrangeCircle>
    </Grid>
    <Grid item xs={7}>
			<div style={headingStyles}>
				<HelloComponent />
			</div>
      <Typography variant="h5">I'm Juli. Welcome to my page!</Typography>
      <br />
      <br />
      <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
      <ClickableCard content={cardContent} styles={{maxWidth: 345}} />
      </Grid>
    </Grid>
    </Grid>
</>
  )
}