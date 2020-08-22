import React, { FunctionComponent, FunctionComponentFactory, ReactChildren, ReactElement, ReactFragment, ReactNodeArray } from 'react'
import { JsxElement, JsxEmit } from 'typescript';
import Card from './Card'


const CardList = ({ robots }: { robots: Array<Robot> }) => {
    return robots.map((robot): JSX.Element => <Card {...robot} key={robot.id} />)
}

export default CardList;