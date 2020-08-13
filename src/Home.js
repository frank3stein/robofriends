import React from 'react'
import Card from './components/Card'

export default ({ robots }) => {
    console.log(robots)
    return robots.map((robot) => <Card {...robot} key={robot.id} />)
}