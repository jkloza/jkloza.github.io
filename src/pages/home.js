import React from 'react'
import HelloComponent from '../molecules/hellos'

// Styles
const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 320,
}

const pageStyles = {
	color: '#232129',
	padding: 96,
	fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

export default function Home() {
  return (
    <div className="App" style={pageStyles}>
		<div style={{ marginLeft: '45%' }}>
			<h1 style={headingStyles}>
				<HelloComponent />
				<br />
			</h1>
      <h5>I'm Juli. Welcome to my page.</h5>
		</div>
    </div>
  )
}