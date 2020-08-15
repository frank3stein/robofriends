import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
    console.log(robots)
    return robots.map((robot) => <Card {...robot} key={robot.id} />)
}

export default CardList;