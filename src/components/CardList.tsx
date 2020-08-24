import React from 'react'
import Card from './Card'


const CardList = ({ robots }: { robots: Array<Robot> }) =>
    <>
        {robots.map(robot => <Card {...robot} key={robot.id} />)}
    </>
export default CardList;