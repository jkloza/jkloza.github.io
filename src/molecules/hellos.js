import React from 'react'
import { getHello } from '../utils'

export default function HelloComponent() {
	return <div>{getHello()}</div>
}